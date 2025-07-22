import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './App.css'
import { Body } from './Components/Body'
import { Head } from './Components/Head'

import store from './Utility/Store'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { WatchPage } from './Components/WatchPage'
import { MainConainer } from './Components/MainConainer'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Body />}>
      <Route path='/' element={<MainConainer/>} />
      <Route path='watch' element={<WatchPage />} />
    </Route>
  )
)

function App() {
  return (
    <Provider store={store}>
      <>
        <Head />
        <RouterProvider router={route} />
      </>
    </Provider>
  )
}

export default App
