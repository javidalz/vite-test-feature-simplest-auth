import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { loading: false, error: false, success: false, token: '' },
    reducers: {
        login: (state) => {
            state.loading = true
        },
        success: (state, action) => {
            state.token = action.payload
            state.loading = false
            state.success = true
            state.error = false
        },
        logout: (state) => {
            state.token = ''
        },
        // successAll: (state, action) => {
        //     state.allPosts = action.payload
        //     state.loading = false
        // },
        // successSingle: (state, action) => {
        //     state.singlePost = action.payload
        //     state.loading = false
        // },
    },
})

export const { login, success, logout } = authSlice.actions
export default authSlice.reducer
