import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../lib/api/authorization'

const CHANGE_FIELD = 'authorization/CHANGE_FIELD'
const INITIAL_FORM = 'authorization/INITIAL_FORM'

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('authorization/LOGIN')
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('authorization/REGISTER')

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form,
  key,
  value
}))

export const initializeForm = createAction(INITIAL_FORM, (form) => form)

export const login = createAction(LOGIN, ({ id, password }) => ({ id, password }))
export const register = createAction(REGISTER, ({ id, name, password }) => ({ id, name, password }))

const loginSaga = createRequestSaga(LOGIN, api.login)
const registerSaga = createRequestSaga(REGISTER, api.register)

export function* authorizationSaga() {
  yield takeLatest(LOGIN, loginSaga)
  yield takeLatest(REGISTER, registerSaga)
}

const initialState = {
  login: {
    id: '',
    password: ''
  },
  register: {
    id: '',
    name: '',
    password: '',
    confirm: ''
  },
  token: null,
  error: null
}

const authorization = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => {
      return produce(state, (draft) => {
        draft[form][key] = value
      })
    },
    [INITIAL_FORM]: (state, { payload: form }) => {
      return {
        ...state,
        [form]: initialState[form],
        error: null
      }
    },
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
      error: null
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
      error: null
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default authorization
