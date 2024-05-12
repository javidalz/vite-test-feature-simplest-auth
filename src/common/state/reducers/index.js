import { combineReducers } from 'redux'
import counterSlice from './counterSlice'
import postsSlice from './postsSlice'
import userSlice from './userSlice'
import authSlice from './authSlice'

export const allReducers = combineReducers({
    counter: counterSlice,
    posts: postsSlice,
    user: userSlice,
    auth: authSlice,
})
