import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'users',
    initialState: { users: [], loading: false },
    reducers: {
        getAllUsers: (state) => {
            state.loading = true
        },
        success: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        // remove: (state, action) => {
        //     // state.value += action.payload
        // },
    },
})

export const { getAllUsers, success } = todoSlice.actions
export default todoSlice.reducer
