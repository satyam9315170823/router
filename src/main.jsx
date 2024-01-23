import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/header/Home.jsx'
import Layout from './Layout.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import GitHub, { githubInfoLoader} from './components/Github.jsx'
// const router= createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[{ path:"",
//     element:<Home/> },{path:"about",element:<About/> },{path:"contact",element:<Contact /> }]
//   }

// ])
const  router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
   <Route path='' element={<Home/>} />
   <Route path='about' element={<About/>} />
   <Route path='contact' element={<Contact/>} />
   <Route
   loader={githubInfoLoader}
   path='github' element={< GitHub />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
