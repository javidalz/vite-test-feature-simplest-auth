import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
    name: 'posts',
    initialState: { allPosts: [], singlePost: {}, loading: true },
    reducers: {
        fetchPosts: (state) => {
            state.loading = true
        },
        successAll: (state, action) => {
            state.allPosts = action.payload
            state.loading = false
        },
        successSingle: (state, action) => {
            state.singlePost = action.payload
            state.loading = false
        },
    },
})

export const { fetchPosts, successAll, successSingle } = postsSlice.actions
export default postsSlice.reducer
