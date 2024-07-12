import { useState } from 'react'
import './assets/styles/main.scss';
import { PostList } from './components/PostList'
import { Provider } from 'react-redux'
import { store } from './configs/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <PostList />
            </div>
          </div>
        </div>
      </Provider>
    </>
  )
}

export default App
