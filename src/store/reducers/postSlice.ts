import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Post } from "../../interfaces"

interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
  posts: [],
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    },
    editPost: (state, action: PayloadAction<Post>) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id
          ? { ...post, title: action.payload.title, body: action.payload.body }
          : post,
      )
    },
  },
})

export const { setPosts, deletePost, editPost } = postsSlice.actions
export default postsSlice.reducer
