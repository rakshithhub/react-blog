import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Home, AllPost, Login, Signup, AddPost, EditPost, Post} from './Pages/index.js'
import Protected from './components/Protected.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: (
          <Protected authentication={false}>
            <Login/>
          </Protected>
        )
      },
      {
        path: '/signup',
        element: (
          <Protected authentication={false}>
            <Signup/>
          </Protected>
        )
      },
      {
        path: '/all-posts',
        element: (
          <Protected authentication>
            <AllPost/>
          </Protected>
        )
      },
      {
        path: '/add-post',
        element: (
          <Protected authentication>
            <AddPost/>
          </Protected>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <Protected authentication>
            <EditPost/>
          </Protected>
        )
      },
      {
        path: '/post/:slug',
        element: (
          <Protected authentication>
            <Post/>
          </Protected>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
