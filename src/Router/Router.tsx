import { Routes, Route } from "react-router-dom"
import { Main } from "../pages/main/main"
import { Layout } from "./Layout"
import { AuthPage } from "../pages/auth/auth"
import { Home } from "../pages/home/home"

export const RouterPages = () => {
    return(
        <Routes>
            <Route path="/Auth" element={<AuthPage/>}/>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path="Home" element={<Home/>}/>
            </Route>
        </Routes>
    )
}