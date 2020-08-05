import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import loading from './loading'
import authorization, { authorizationSaga } from './authorization'
import user, { userSaga } from './user'
import hero, { heroSaga } from './hero/list'

import commonList, { commonListSaga } from './common/list'
import commonRead, { commonReadSaga } from './common/read'

import lodgeList, { lodgeListSaga } from './lodge/list'
import lodgeRead, { lodgeReadSaga } from './lodge/read'
import roomRead, { roomReadSaga } from './room/read'
import benefitList, { benefitListSaga } from './benefit/list'
import benefitRead, { benefitReadSaga } from './benefit/read'

const rootReducer = combineReducers({ loading, authorization, user, hero, commonList, commonRead, lodgeList, lodgeRead, roomRead, benefitList, benefitRead })

export function* rootSaga() {
  yield all([
    authorizationSaga(),
    userSaga(),
    heroSaga(),
    commonListSaga(),
    commonReadSaga(),
    lodgeListSaga(),
    lodgeReadSaga(),
    roomReadSaga(),
    benefitListSaga(),
    benefitReadSaga()
  ])
}

export default rootReducer
