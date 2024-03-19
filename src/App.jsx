import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './component/cart/Cart'
import Dashboard from './component/dashboard/Dashboard'
import Product from './component/product/Product'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './layout/AppLayout'


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path='' element={<Product />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/dashBoard' element={<Dashboard />}></Route>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
