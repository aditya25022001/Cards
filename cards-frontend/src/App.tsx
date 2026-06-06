import './App.css'
import Header from './components/Header'
import GameBoard from './screens/GameBoard'
import HomeScreen from './screens/HomeScreen'
import { createBrowserRouter, Outlet } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import ErrorPage from './screens/ErrorPage'
import NotFound from './screens/NotFound'

function AppLayout() {
  return (
    <>
      <Header/>
      <div className="homeBody">
        <Outlet />
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        Component: HomeScreen,
      },
      {
        path: '/game',
        Component: GameBoard,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
