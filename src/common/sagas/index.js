import { spawn } from 'redux-saga/effects'
import postsSaga from './postsSaga'
import userSaga from './userSaga'
import authSaga from './authSaga'

export default function* rootSaga() {
    yield spawn(postsSaga)
    yield spawn(userSaga)
    yield spawn(authSaga)
}
