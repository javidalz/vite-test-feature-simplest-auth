import { createSelector } from 'reselect'

export const postsSelector = createSelector(
    [(state) => state.posts.allPosts],

    (allPosts) => {
        const a = allPosts.filter((post) => post.title.indexOf('e') === 0)
        console.log(10, a)
        return a
    }
)

// export const singlePostSelector = createSelector(
//     (state) => state.posts.allPosts,
//     (state, id) => id,

//     (allPosts, id) => allPosts.find((post) => post.id == id)
// )

export const singlePostSelector = createSelector(
    (state) => state.posts,
    (posts) => posts.singlePost
)

export const titleOfSinglePostSelector = createSelector(
    singlePostSelector,
    (singlePost) => singlePost.title
)
