import Post from './Post'
import Loader from './Loader'
import { anonymousUser } from '../configs/constants'
import { useGetPostsQuery, useGetUsersQuery } from '../services'


export function PostList() {
  const { data: posts, isLoading: postsLoading } = useGetPostsQuery()
  const { data: users, isLoading: usersLoading } = useGetUsersQuery()

  const isLoading = postsLoading || usersLoading

  if (isLoading) return <Loader />

  if (!posts || !users) return <div>Something went wrong...</div>

  return (
    <>
      {
        posts.map((post, index) => {
          const user = users.find(user => user.id === post.userId) || anonymousUser;
          return (
            <Post key={index} post={post} user={ user } />
          )
        })
      }
    </>
  )
}

export default PostList