import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Products from './component/Products/Products'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Brands from './component/Brands/Brands'
import Carts from './component/Carts/Carts'
import Notfound from './component/Notfound/Notfound'

let routers = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<Products/>},
    {path:'login' , element:<Login/>},
    {path:'register' , element:<Register/>},
    {path:'brands' , element:<Brands/>},
    {path:'carts' , element:<Carts/>},
    {path:'*' , element:<Notfound/>}
  ]}
])



function App() {

  return (
    <>
      
        <RouterProvider router = {routers}></RouterProvider>

    </>
  )
}

export default App
