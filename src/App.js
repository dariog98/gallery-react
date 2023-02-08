import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppContainer from './components/AppContainer';
import HomePage from './pages/Home';
import ItemPage from './pages/Item';
import NotFoundPage from './pages/NotFound';
import './styles.css'

function App() {

    return (
        <BrowserRouter>
            <AppContainer>
                <Routes>
                    <Route path="/" element={ <HomePage/> }/>
                    <Route path="/item/:id" element={ <ItemPage/> }/>
                    <Route path="/random" element={ <ItemPage/> }/>
                    <Route path="*" element={ <NotFoundPage/> }/>
                </Routes>
            </AppContainer>
        </BrowserRouter>
    )
}

export default App;