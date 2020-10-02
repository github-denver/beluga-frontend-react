import { call, put } from 'redux-saga/effects'
import { startLoading, finishLoading } from '../modules/loading'

export const createRequestActionTypes = (type) => {
  console.log('lib → [createRequestSaga.js] → createRequestActionTypes → type: ', type)
  console.log('')

  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  return [type, SUCCESS, FAILURE]
}

export default function createRequestSaga(type, request) {
  console.log('lib → [createRequestSaga.js] → createRequestSaga → type: ', type)
  console.log('')

  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  return function* (action) {
    console.log('lib → [createRequestSaga.js] → createRequestSaga → function* → startLoading')
    console.log('')

    yield put(startLoading(type))

    try {
      const response = yield call(request, action.payload)

      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response
      })
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true
      })
    }

    console.log('lib → [createRequestSaga.js] → createRequestSaga → function* → finishLoading')
    console.log('')

    yield put(finishLoading(type))
  }
}
