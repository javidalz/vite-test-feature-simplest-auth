import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axiosInstance from '../axiosInstance'
import {
    fetchPosts,
    successAll,
    successSingle,
} from '../state/reducers/postsSlice'

const getPosts = (postId) => {
    return fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId ?? ''}`
    ).then((response) => response.json())
    // .then(console.log)
}
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPostsSaga(action) {
    const postId = action.payload

    try {
        const data = yield call(getPosts, postId)
        if (postId) {
            yield put(successSingle(data))
        } else yield put(successAll(data))
    } catch (e) {
        console.error(e.message)
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* postsSaga() {
    yield takeLatest(fetchPosts, fetchPostsSaga)
}

export default postsSaga
