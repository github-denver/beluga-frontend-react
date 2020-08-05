import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/list'

const [BENEFIT_LIST_CONTENTS, BENEFIT_LIST_CONTENTS_SUCCESS, BENEFIT_LIST_CONTENTS_FAILURE] = createRequestActionTypes('benefitList/BENEFIT_LIST_CONTENTS')
const [BENEFIT_LIST_INFORMATION, BENEFIT_LIST_INFORMATION_SUCCESS, BENEFIT_LIST_INFORMATION_FAILURE] = createRequestActionTypes(
  'benefitList/BENEFIT_LIST_INFORMATION'
)

export const benefitListContents = createAction(BENEFIT_LIST_CONTENTS, ({ category, number }) => ({ category, number }))
export const benefitListInformation = createAction(BENEFIT_LIST_INFORMATION, ({ category, number }) => ({ category, number }))

const benefitListContentsSaga = createRequestSaga(BENEFIT_LIST_CONTENTS, api.listDescription)
const benefitListInformationSaga = createRequestSaga(BENEFIT_LIST_INFORMATION, api.listInformation)

export function* benefitListSaga() {
  yield takeLatest(BENEFIT_LIST_CONTENTS, benefitListContentsSaga)
  yield takeLatest(BENEFIT_LIST_INFORMATION, benefitListInformationSaga)
}

const initialState = {
  contents: null,
  information: null,
  error: null
}

const benefitList = handleActions(
  {
    [BENEFIT_LIST_CONTENTS_SUCCESS]: (state, { payload: contents }) => {
      return {
        ...state,
        contents
      }
    },
    [BENEFIT_LIST_CONTENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [BENEFIT_LIST_INFORMATION_SUCCESS]: (state, { payload: information }) => {
      return {
        ...state,
        information
      }
    },
    [BENEFIT_LIST_INFORMATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default benefitList
