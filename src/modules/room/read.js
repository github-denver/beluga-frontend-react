import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const [ROOM_READ_CONTENTS, ROOM_READ_CONTENTS_SUCCESS, ROOM_READ_CONTENTS_FAILURE] = createRequestActionTypes('roomRead/ROOM_READ_CONTENTS')
const [ROOM_READ_INFORMATION, ROOM_READ_INFORMATION_SUCCESS, ROOM_READ_INFORMATION_FAILURE] = createRequestActionTypes('roomRead/ROOM_READ_INFORMATION')

export const roomReadContents = createAction(ROOM_READ_CONTENTS, ({ category, number }) => ({ category, number }))
export const roomReadInformation = createAction(ROOM_READ_INFORMATION, ({ category, number }) => ({ category, number }))

const roomReadContentsSaga = createRequestSaga(ROOM_READ_CONTENTS, api.readDescription)
const roomReadInformationSaga = createRequestSaga(ROOM_READ_INFORMATION, api.readInformation)

export function* roomReadSaga() {
  yield takeLatest(ROOM_READ_CONTENTS, roomReadContentsSaga)
  yield takeLatest(ROOM_READ_INFORMATION, roomReadInformationSaga)
}

const initialState = {
  contents: null,
  information: null,
  error: null
}

const roomRead = handleActions(
  {
    [ROOM_READ_CONTENTS_SUCCESS]: (state, { payload: contents }) => {
      return {
        ...state,
        contents
      }
    },
    [ROOM_READ_CONTENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [ROOM_READ_INFORMATION_SUCCESS]: (state, { payload: information }) => {
      return {
        ...state,
        information
      }
    },
    [ROOM_READ_INFORMATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default roomRead
