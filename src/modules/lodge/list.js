import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/list'

const [LODGE_LIST_CONTENTS, LODGE_LIST_CONTENTS_SUCCESS, LODGE_LIST_CONTENTS_FAILURE] = createRequestActionTypes('lodgeList/LODGE_LIST_CONTENTS')
const [LODGE_LIST_INFORMATION, LODGE_LIST_INFORMATION_SUCCESS, LODGE_LIST_INFORMATION_FAILURE] = createRequestActionTypes('lodgeList/LODGE_LIST_INFORMATION')

export const lodgeListContents = createAction(LODGE_LIST_CONTENTS, ({ category, number }) => ({ category, number }))
export const lodgeListInformation = createAction(LODGE_LIST_INFORMATION, ({ category, number }) => ({ category, number }))

const lodgeListContentsSaga = createRequestSaga(LODGE_LIST_CONTENTS, api.listDescription)
const lodgeListInformationSaga = createRequestSaga(LODGE_LIST_INFORMATION, api.listInformation)

export function* lodgeListSaga() {
  yield takeLatest(LODGE_LIST_CONTENTS, lodgeListContentsSaga)
  yield takeLatest(LODGE_LIST_INFORMATION, lodgeListInformationSaga)
}

const initialState = {
  contents: null,
  information: null,
  error: null
}

const lodgeList = handleActions(
  {
    [LODGE_LIST_CONTENTS_SUCCESS]: (state, { payload: contents }) => {
      return {
        ...state,
        contents
      }
    },
    [LODGE_LIST_CONTENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [LODGE_LIST_INFORMATION_SUCCESS]: (state, { payload: information }) => {
      return {
        ...state,
        information
      }
    },
    [LODGE_LIST_INFORMATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default lodgeList
