import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { PostProps } from "../types"
import { deletePost, editPost } from "../store/reducers/postSlice"
import { RootState } from "../store/configStore"

export function Post({ post, user }: PostProps) {
  const dispatch = useDispatch()

  const userEmail = useSelector((state: RootState) =>
    state.userState ? state.userState.userEmail : null,
  )
  const [isEditing, setIsEditing] = useState(false)
  const [editedPost, setEditedPost] = useState({
    title: post.title,
    body: post.body,
  })

  const handleDelete = () => {
    dispatch(deletePost(post.id))
  }

  const handleEdit = () => {
    dispatch(editPost({ id: post.id, ...editedPost }))
    setIsEditing(false)
  }

  return (
    <div data-testid="post" className="card my-2">
      <div className="card-body">
        {isEditing ? (
          <>
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  value={editedPost.title}
                  onChange={(e) =>
                    setEditedPost({ ...editedPost, title: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-2">
                <textarea
                  className="form-control"
                  value={editedPost.body}
                  onChange={(e) =>
                    setEditedPost({ ...editedPost, body: e.target.value })
                  }
                />
              </div>

              <button className="btn btn-primary" onClick={handleEdit}>
                Save
              </button>
            </form>
          </>
        ) : (
          <>
            <h5 data-testid="post-title" className="card-title">
              {post.title}
            </h5>
            <p data-testid="post-body" className="card-text">
              {post.body}
            </p>
            <span className="badge text-bg-secondary">{user.name}</span>
            <span className="mx-3"></span>
            {userEmail && (
              <>
                <button
                  data-testid="edit-button"
                  className="btn btn-info mx-2"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Post
                </button>
                <button
                  data-testid="delete-button"
                  className="btn btn-danger mx-2"
                  onClick={handleDelete}
                >
                  Delete Post
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Post
