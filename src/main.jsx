import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router";
import './main.css'

//Layouts
import HomeLayout from './layouts/HomeLayout';
import PopoutLayout from './layouts/PopoutLayout';

//Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import StaffPhotosViewPage from './pages/StaffPhotosViewPage'
import LinksPage from './pages/LinksPage';
import PhoneExtensionsPage from './pages/PhoneExtensionsPage';
import MePage from './pages/MePage';

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/staff-photos" element={<StaffPhotosViewPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/voip-extensions" element={<PhoneExtensionsPage />} />
        <Route path="/me" element={<MePage />} />
      </Route>
      <Route element={<PopoutLayout />} >
        <Route path="/staff-photos-web" element={<StaffPhotosViewPage />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)