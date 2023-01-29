import './index.css'
import './styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Item from './pages/Item'
import Gallery from './pages/Gallery'
import User from './pages/User'

function App() {
    return (
        <div className="page">
            <BrowserRouter>
                <Navbar/>

                <div className="page-content">
                    <Routes>
                        <Route path="/" element={ <Gallery/> }/>
                        <Route path="/random" element={ <Item/> }/>
                        <Route path="/:id" element={ <Item/> }/>
                        <Route path="/users/:username" element={ <User/> }/>
                    </Routes>
                </div>
                
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;