import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import loading from './loading'
import authorization, { authorizationSaga } from './authorization'
import user, { userSaga } from './user'
import hero, { heroSaga } from './hero/list'
import lodgeList, { lodgeListSaga } from './lodge/list'
import lodgeRead, { lodgeReadSaga } from './lodge/read'
import roomRead, { roomReadSaga } from './room/read'

import benefitRead, { benefitReadSaga } from './benefit/read'

import benefitList, { benefitListSaga } from './benefit/list'
import readBenefit2, { readBenefitSaga2 } from './benefit/read2'

const rootReducer = combineReducers({ loading, authorization, user, hero, lodgeList, lodgeRead, roomRead, benefitList, benefitRead, readBenefit2 })

export function* rootSaga() {
  yield all([
    authorizationSaga(),
    userSaga(),
    heroSaga(),
    lodgeListSaga(),
    lodgeReadSaga(),
    roomReadSaga(),
    benefitListSaga(),
    benefitReadSaga(),
    readBenefitSaga2()
  ])
}

export default rootReducer
