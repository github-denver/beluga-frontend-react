import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/list'

const [COMMON_LIST_CONTENTS, COMMON_LIST_CONTENTS_SUCCESS, COMMON_LIST_CONTENTS_FAILURE] = createRequestActionTypes('commonList/COMMON_LIST_CONTENTS')
const [COMMON_LIST_INFORMATION, COMMON_LIST_INFORMATION_SUCCESS, COMMON_LIST_INFORMATION_FAILURE] = createRequestActionTypes(
  'commonList/COMMON_LIST_INFORMATION'
)

export const commonListContents = createAction(COMMON_LIST_CONTENTS, ({ category, number }) => ({ category, number }))
export const commonListInformation = createAction(COMMON_LIST_INFORMATION, ({ category, number }) => ({ category, number }))

const commonListContentsSaga = createRequestSaga(COMMON_LIST_CONTENTS, api.listDescription)
const commonListInformationSaga = createRequestSaga(COMMON_LIST_INFORMATION, api.listInformation)

export function* commonListSaga() {
  yield takeLatest(COMMON_LIST_CONTENTS, commonListContentsSaga)
  yield takeLatest(COMMON_LIST_INFORMATION, commonListInformationSaga)
}

const initialState = {
  contents: null,
  information: null,
  error: null
}

const commonList = handleActions(
  {
    [COMMON_LIST_CONTENTS_SUCCESS]: (state, { payload: contents }) => {
      return {
        ...state,
        contents
      }
    },
    [COMMON_LIST_CONTENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [COMMON_LIST_INFORMATION_SUCCESS]: (state, { payload: information }) => {
      return {
        ...state,
        information
      }
    },
    [COMMON_LIST_INFORMATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default commonList
