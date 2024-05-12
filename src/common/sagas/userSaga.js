import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axiosInstance from '../axiosInstance'
import { getAllUsers, success } from '../state/reducers/userSlice'

const getUser = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(
        (response) => response.json()
    )
}
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        const users = yield call(getUser)
        console.log(1311, users)
        yield put(success(users))
    } catch (e) {
        console.error(e.message)
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* userSaga() {
    yield takeLatest(getAllUsers, fetchUser)
}

export default userSaga
