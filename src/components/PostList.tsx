import { PostListProps } from '../types';
import Post from './Post'
import { anonymousUser } from '../configs/constants'
import { useGetPostsQuery, useGetUsersQuery } from '../services'


export function PostList() {
  const { data: posts, isLoading: postsLoading } = useGetPostsQuery()
  const { data: users, isLoading: usersLoading } = useGetUsersQuery()

  const isLoading = postsLoading || usersLoading


  return (!isLoading && posts && users) && (
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