import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axiosInstance from '../axiosInstance'
import {
    fetchPosts,
    successAll,
    successSingle,
} from '../state/reducers/postsSlice'
import { login, success } from '../state/reducers/authSlice'

const postLogin = (email, password) => {
    return axiosInstance.post('/signin', { email, password })
}
function* authSaga(action) {
    const { email, password } = action.payload

    console.log('authSaga', action)

    try {
        const data = yield call(postLogin, email, password)

        yield put(success(data.data))
    } catch (e) {
        console.error(e.message)
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* postsSaga() {
    yield takeLatest(login, authSaga)
}

export default postsSaga
