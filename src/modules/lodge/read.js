import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const [LODGE_READ_CONTENTS, LODGE_READ_CONTENTS_SUCCESS, LODGE_READ_CONTENTS_FAILURE] = createRequestActionTypes('lodgeRead/LODGE_READ_CONTENTS')
const [LODGE_READ_INFORMATION, LODGE_READ_INFORMATION_SUCCESS, LODGE_READ_INFORMATION_FAILURE] = createRequestActionTypes('lodgeRead/LODGE_READ_INFORMATION')

export const lodgeReadContents = createAction(LODGE_READ_CONTENTS, ({ category, number }) => ({ category, number }))
export const lodgeReadInformation = createAction(LODGE_READ_INFORMATION, ({ category, number }) => ({ category, number }))

const lodgeReadContentsSaga = createRequestSaga(LODGE_READ_CONTENTS, api.readDescription)
const lodgeReadInformationSaga = createRequestSaga(LODGE_READ_INFORMATION, api.readInformation)

export function* lodgeReadSaga() {
  yield takeLatest(LODGE_READ_CONTENTS, lodgeReadContentsSaga)
  yield takeLatest(LODGE_READ_INFORMATION, lodgeReadInformationSaga)
}

const initialState = {
  contents: null,
  information: null,
  error: null
}

const lodgeRead = handleActions(
  {
    [LODGE_READ_CONTENTS_SUCCESS]: (state, { payload: contents }) => {
      return {
        ...state,
        contents
      }
    },
    [LODGE_READ_CONTENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [LODGE_READ_INFORMATION_SUCCESS]: (state, { payload: information }) => {
      return {
        ...state,
        information
      }
    },
    [LODGE_READ_INFORMATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default lodgeRead
