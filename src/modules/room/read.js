import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const [DESCRIPTION_READ_ROOM, DESCRIPTION_READ_ROOM_SUCCESS, DESCRIPTION_READ_ROOM_FAILURE] = createRequestActionTypes('readRoom/DESCRIPTION_READ_ROOM')
const [INFORMATION_READ_ROOM, INFORMATION_READ_ROOM_SUCCESS, INFORMATION_READ_ROOM_FAILURE] = createRequestActionTypes('readRoom/INFORMATION_READ_ROOM')

export const readRoomDescription = createAction(DESCRIPTION_READ_ROOM, ({ category, number }) => ({ category, number }))
export const readRoomInformation = createAction(INFORMATION_READ_ROOM, ({ category, number }) => ({ category, number }))

const readRoomDescriptionSaga = createRequestSaga(DESCRIPTION_READ_ROOM, api.readDescription)
const readRoomInformationSaga = createRequestSaga(INFORMATION_READ_ROOM, api.readInformation)

export function* readRoomSaga() {
  yield takeLatest(DESCRIPTION_READ_ROOM, readRoomDescriptionSaga)
  yield takeLatest(INFORMATION_READ_ROOM, readRoomInformationSaga)
}

const initialState = {
  description: null,
  information: null,
  error: null
}

const readRoom = handleActions(
  {
    [DESCRIPTION_READ_ROOM_SUCCESS]: (state, { payload: description }) => {
      return {
        ...state,
        description
      }
    },
    [DESCRIPTION_READ_ROOM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [INFORMATION_READ_ROOM_SUCCESS]: (state, { payload: information }) => {
      return {
        ...state,
        information
      }
    },
    [INFORMATION_READ_ROOM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default readRoom
