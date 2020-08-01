import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/list'

const [DESCRIPTION_LIST_LODGE, DESCRIPTION_LIST_LODGE_SUCCESS, DESCRIPTION_LIST_LODGE_FAILURE] = createRequestActionTypes('listLodge/DESCRIPTION_LIST_LODGE')
const [INFORMATION_LIST_LODGE, INFORMATION_LIST_LODGE_SUCCESS, INFORMATION_LIST_LODGE_FAILURE] = createRequestActionTypes('listLodge/INFORMATION_LIST_LODGE')

export const listLodgeDescription = createAction(DESCRIPTION_LIST_LODGE, ({ category, number }) => ({ category, number }))
export const listLodgeInformation = createAction(INFORMATION_LIST_LODGE, ({ category, number }) => ({ category, number }))

const listLodgeDescriptionSaga = createRequestSaga(DESCRIPTION_LIST_LODGE, api.listDescription)
const listLodgeInformationSaga = createRequestSaga(INFORMATION_LIST_LODGE, api.listInformation)

export function* listLodgeSaga() {
  yield takeLatest(DESCRIPTION_LIST_LODGE, listLodgeDescriptionSaga)
  yield takeLatest(INFORMATION_LIST_LODGE, listLodgeInformationSaga)
}

const initialState = {
  description: null,
  information: null,
  error: null
}

const listLodge = handleActions(
  {
    [DESCRIPTION_LIST_LODGE_SUCCESS]: (state, { payload: description }) => {
      return {
        ...state,
        description
      }
    },
    [DESCRIPTION_LIST_LODGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [INFORMATION_LIST_LODGE_SUCCESS]: (state, { payload: information }) => {
      return {
        ...state,
        information
      }
    },
    [INFORMATION_LIST_LODGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default listLodge
