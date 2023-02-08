import Navbar from './Navbar'
import Footer from './Footer'
import { Box, Container } from "@chakra-ui/react"

const AppContainer = ({children}) => {
    return (
        <Container display="flex" maxW="container.lg" h="100vh" centerContent>
            <Box as="header">
                <Navbar/>
            </Box>

            <Box as="main" flexGrow={1}>
                {children}
            </Box>
            
            <Box as="footer" w="100%">
                <Footer/>
            </Box>
        </Container>
    )
}

export default AppContainer