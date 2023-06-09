import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import Layout from "../pages/Layout";
import Work from "../pages/Work";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/works" element={<Works/>}></Route>
                <Route path="/work/:id" element={<Work/>}></Route>
            </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router