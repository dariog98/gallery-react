import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RoutesNavigation from './constants/RoutesNavigation'
import { AppContainer } from './components'
import { Home, NotFound, Photo } from './pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppContainer/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: RoutesNavigation.Search,
                element: <Home/>
            },
            {
                path: RoutesNavigation.Photo,
                element: <Photo/>,
            },
            /*
            {
                path: RoutesNavigation.Photos,
                element: <Photo/>
            },
            */
            
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    },
])

const App = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App