import { useState } from 'react'
import './app.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './layouts/header/header'
import Footer from './layouts/footer/footer'
import Landing from './layouts/landing/landing'
import NotFound from './layouts/not-found/not-found'
import About from './layouts/about/about'

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/about' element={<About />}></Route>
                {/* <Route path='/learn' element={<Learn />}></Route> */}
                {/* <Route path='/portofolio' element={<Portofolio />}></Route> */}
                {/* <Route path='/guitar' element={<Guitar />}></Route> */}
                {/* <Route path='/contact' element={<Contact />}></Route> */}
                <Route path='/not-found' element={<NotFound />}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default App
