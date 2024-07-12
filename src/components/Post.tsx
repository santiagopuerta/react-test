import { PostProps } from "../types"

export function Post({ post, user }: PostProps) {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <span className="badge text-bg-secondary">{user.name}</span>
      </div>
    </div>
  )
}

export default Post
