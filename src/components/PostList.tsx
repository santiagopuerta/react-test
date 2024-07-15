import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Post from "./Post"
import Loader from "./Loader"
import { anonymousUser } from "../configs/constants"
import { useGetPostsQuery, useGetUsersQuery } from "../services"
import { Post as PostType } from "../interfaces"
import { setPosts } from "../store/reducers/postSlice"
import { RootState } from "../store/configStore"

export function PostList() {
  const dispatch = useDispatch()
  const { data: postsData, isLoading: postsLoading } = useGetPostsQuery()
  const { data: users, isLoading: usersLoading } = useGetUsersQuery()

  const posts = useSelector((state: RootState) =>
    state.postsState ? state.postsState.posts : null,
  )

  const isLoading = postsLoading || usersLoading

  useEffect(() => {
    if (posts?.length === 0 && postsData && users) {
      dispatch(setPosts(postsData))
    }
  }, [dispatch, posts?.length, postsData, users])

  if (isLoading) return <Loader />

  if (!posts || !users) return <div>Something went wrong...</div>

  return (
    <>
      {posts.map((post: PostType, index: number) => {
        const user =
          users.find((user) => user.id === post.userId) || anonymousUser
        return <Post key={index} post={post} user={user} />
      })}
    </>
  )
}

export default PostList
