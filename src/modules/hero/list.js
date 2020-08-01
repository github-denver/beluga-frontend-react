import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/hero'

const [LIST_HERO, LIST_HERO_SUCCESS, LIST_HERO_FAILURE] = createRequestActionTypes('hero/LIST_HERO')

export const listHero = createAction(LIST_HERO, ({ category, number }) => ({ category, number }))

const listHeroSaga = createRequestSaga(LIST_HERO, api.list)

export function* heroSaga() {
  yield takeLatest(LIST_HERO, listHeroSaga)
}

const initialState = {
  data: null,
  error: null
}

const hero = handleActions(
  {
    [LIST_HERO_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [LIST_HERO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default hero
