import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import loading from './loading'
import authorization, { authorizationSaga } from './authorization'
import user, { userSaga } from './user'
import hero, { heroSaga } from './hero/list'
import listLodge, { listLodgeSaga } from './lodge/list'
import readLodge, { readLodgeSaga } from './lodge/read'
import readRoom, { readRoomSaga } from './room/read'

const rootReducer = combineReducers({ loading, authorization, user, hero, listLodge, readLodge, readRoom })

export function* rootSaga() {
  yield all([authorizationSaga(), userSaga(), heroSaga(), listLodgeSaga(), readLodgeSaga(), readRoomSaga()])
}

export default rootReducer
