import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const [BENEFIT_READ_CONTENTS, BENEFIT_READ_CONTENTS_SUCCESS, BENEFIT_READ_CONTENTS_FAILURE] = createRequestActionTypes('benefitRead/BENEFIT_READ_CONTENTS')
const [BENEFIT_READ_INFORMATION, BENEFIT_READ_INFORMATION_SUCCESS, BENEFIT_READ_INFORMATION_FAILURE] = createRequestActionTypes(
  'benefitRead/BENEFIT_READ_INFORMATION'
)

export const benefitReadContents = createAction(BENEFIT_READ_CONTENTS, ({ category, number }) => ({ category, number }))
export const benefitReadInformation = createAction(BENEFIT_READ_INFORMATION, ({ category, number }) => ({ category, number }))

const benefitReadContentsSaga = createRequestSaga(BENEFIT_READ_CONTENTS, api.readDescription)
const benefitReadInformationSaga = createRequestSaga(BENEFIT_READ_INFORMATION, api.readInformation)

export function* benefitReadSaga() {
  yield takeLatest(BENEFIT_READ_CONTENTS, benefitReadContentsSaga)
  yield takeLatest(BENEFIT_READ_INFORMATION, benefitReadInformationSaga)
}

const initialState = {
  contents: null,
  information: null,
  error: null
}

const benefitRead = handleActions(
  {
    [BENEFIT_READ_CONTENTS_SUCCESS]: (state, { payload: contents }) => {
      return {
        ...state,
        contents
      }
    },
    [BENEFIT_READ_CONTENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [BENEFIT_READ_INFORMATION_SUCCESS]: (state, { payload: information }) => {
      return {
        ...state,
        information
      }
    },
    [BENEFIT_READ_INFORMATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default benefitRead
