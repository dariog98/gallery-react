import { Box } from '@chakra-ui/react'
import { Navbar, Footer } from '../components'
import { Outlet } from 'react-router-dom'

const AppContainer = () => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center' px='4' h='100vh'>
            <Box as='header' maxWidth='container.lg' w='100%'>
                <Navbar/>
            </Box>

            <Box as='main' flexGrow={1} py={4} display='flex' justifyContent='center'>
                <Outlet/>
            </Box>
            
            <Box as='footer' maxWidth='container.lg' w='100%'>
                <Footer/>
            </Box>
        </Box>
    )
}

export default AppContainer