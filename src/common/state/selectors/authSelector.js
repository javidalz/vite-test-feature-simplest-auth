import { createSelector } from 'reselect'

export const tokenSelector = createSelector(
    [(state) => state.auth.token],

    (token) => token
)
