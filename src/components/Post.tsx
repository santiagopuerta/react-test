import { useDispatch, useSelector } from "react-redux"
import { PostProps } from "../types"
import { deletePost } from "../store/reducers/postSlice"
import { RootState } from "../store/configStore"

export function Post({ post, user }: PostProps) {
  const dispatch = useDispatch()

  const userEmail = useSelector((state: RootState) =>
    state.userState ? state.userState.userEmail : null,
  )

  const handleDelete = () => {
    dispatch(deletePost(post.id))
  }

  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <span className="badge text-bg-secondary mx-3">{user.name}</span>
        {userEmail && (
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete Post
          </button>
        )}
      </div>
    </div>
  )
}

export default Post
