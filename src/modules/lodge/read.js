import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const [DESCRIPTION_READ_LODGE, DESCRIPTION_READ_LODGE_SUCCESS, DESCRIPTION_READ_LODGE_FAILURE] = createRequestActionTypes('readLodge/DESCRIPTION_READ_LODGE')
const [INFORMATION_READ_LODGE, INFORMATION_READ_LODGE_SUCCESS, INFORMATION_READ_LODGE_FAILURE] = createRequestActionTypes('readLodge/INFORMATION_READ_LODGE')

export const readLodgeDescription = createAction(DESCRIPTION_READ_LODGE, ({ category, number }) => ({ category, number }))
export const readLodgeInformation = createAction(INFORMATION_READ_LODGE, ({ category, number }) => ({ category, number }))

const readLodgeDescriptionSaga = createRequestSaga(DESCRIPTION_READ_LODGE, api.readDescription)
const readLodgeInformationSaga = createRequestSaga(INFORMATION_READ_LODGE, api.readInformation)

export function* readLodgeSaga() {
  yield takeLatest(DESCRIPTION_READ_LODGE, readLodgeDescriptionSaga)
  yield takeLatest(INFORMATION_READ_LODGE, readLodgeInformationSaga)
}

const initialState = {
  description: null,
  information: null,
  error: null
}

const readLodge = handleActions(
  {
    [DESCRIPTION_READ_LODGE_SUCCESS]: (state, { payload: description }) => {
      return {
        ...state,
        description
      }
    },
    [DESCRIPTION_READ_LODGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [INFORMATION_READ_LODGE_SUCCESS]: (state, { payload: information }) => {
      return {
        ...state,
        information
      }
    },
    [INFORMATION_READ_LODGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default readLodge
