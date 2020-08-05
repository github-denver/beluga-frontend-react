import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const [COMMON_READ_CONTENTS, COMMON_READ_CONTENTS_SUCCESS, COMMON_READ_CONTENTS_FAILURE] = createRequestActionTypes('commonRead/COMMON_READ_CONTENTS')
const [COMMON_READ_INFORMATION, COMMON_READ_INFORMATION_SUCCESS, COMMON_READ_INFORMATION_FAILURE] = createRequestActionTypes(
  'commonRead/COMMON_READ_INFORMATION'
)

export const commonReadContents = createAction(COMMON_READ_CONTENTS, ({ category, number }) => ({ category, number }))
export const commonReadInformation = createAction(COMMON_READ_INFORMATION, ({ category, number }) => ({ category, number }))

const commonReadContentsSaga = createRequestSaga(COMMON_READ_CONTENTS, api.readDescription)
const commonReadInformationSaga = createRequestSaga(COMMON_READ_INFORMATION, api.readInformation)

export function* commonReadSaga() {
  yield takeLatest(COMMON_READ_CONTENTS, commonReadContentsSaga)
  yield takeLatest(COMMON_READ_INFORMATION, commonReadInformationSaga)
}

const initialState = {
  contents: null,
  information: null,
  error: null
}

const commonRead = handleActions(
  {
    [COMMON_READ_CONTENTS_SUCCESS]: (state, { payload: contents }) => {
      return {
        ...state,
        contents
      }
    },
    [COMMON_READ_CONTENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [COMMON_READ_INFORMATION_SUCCESS]: (state, { payload: information }) => {
      return {
        ...state,
        information
      }
    },
    [COMMON_READ_INFORMATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default commonRead
