import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomePage from './pages/HomePage'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RegisterForm from './components/RegisterForm'
import LoginPage from './pages/LoginPage'
import menuPage from "./pages/MenuPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<App/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'/menu'} element={<MenuPage/>}></Route>
            <Route path={'/register'} element={<RegisterForm/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
