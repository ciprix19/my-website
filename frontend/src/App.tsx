import { useState } from 'react'
import './app.css'
import Header from './layouts/header/header'
import Footer from './layouts/footer/footer'
import Landing from './layouts/landing/landing'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header></Header>
            <Landing></Landing>
            <Footer></Footer>
        </>
    )
}

export default App
