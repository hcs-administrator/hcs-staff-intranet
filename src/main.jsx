import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router";
import './main.css'

//Layouts
import HomeLayout from './layouts/HomeLayout';

//Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </StrictMode>
)