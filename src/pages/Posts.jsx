import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { getAllUsers } from '../common/state/reducers/userSlice'
import { fetchPosts } from '../common/state/reducers/postsSlice'
import { createSelector } from 'reselect'
import { postsSelector } from '../common/state/selectors/postsSelector'

const Posts = () => {
    const dispatch = useDispatch()
    // const posts = useSelector((state) => {
    //     console.log(90, state.posts.allPosts)

    //     const ePosts = state.posts.allPosts?.filter(
    //         (post) => post.title.indexOf('e') === 0
    //     )

    //     return ePosts
    // })

    const posts = useSelector(postsSelector)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div className="center">
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts
