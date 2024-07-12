import { PostList } from "../components/PostList"

export function Home() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <PostList />
        </div>
      </div>
    </div>
  )
}

export default Home
