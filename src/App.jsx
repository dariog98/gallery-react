import { HashRouter, Routes, Route } from 'react-router-dom'
import AppContainer from './components/AppContainer';
import HomePage from './pages/Home';
import PhotoPage from './pages/Photo';
import NotFoundPage from './pages/NotFound';
import './styles.css'

const App = () => {
    return (
        <HashRouter>
            <AppContainer>
                <Routes>
                    <Route exact path="/" element={ <HomePage/> }/>
                    <Route path="/:search" element={ <HomePage/> }/>
                    <Route path="/photo/:id" element={ <PhotoPage/> }/>
                    <Route path="/photo/random" element={ <PhotoPage/> }/>
                    <Route path="*" element={ <NotFoundPage/> }/>
                </Routes>
            </AppContainer>
        </HashRouter>
    )
}

export default App