import { Box, Heading, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Link as ReachLink } from 'react-router-dom'
import RoutesNavigation from '../constants/RoutesNavigation'
import { useNavbar } from '../hooks'

const iconSize = { width: '1.5rem', height: '1.5rem' }

const Navbar = () => {
    const { colorMode, toggleColorMode, location, goToRandomPhoto } = useNavbar()

    return (
        <Flex as='nav' alignItems='center' justifyContent='space-between' w='100%' pt={4}>
            <Breadcrumb separator='' w='100px'>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={goToRandomPhoto}>Random</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Box>
                <Heading
                    as={ReachLink}
                    to={RoutesNavigation.Home}
                    size='2xl'
                    style={{textTransform: 'uppercase'}}
                >
                    Gallery
                </Heading>
            </Box>
            
            <Box w='100px' display='flex' justifyContent='flex-end'>
                <Button 
                    w='3rem'
                    h='3rem'
                    p={0} m={0}
                    onClick={toggleColorMode}
                    colorScheme={colorMode === 'light' ? 'yellow' : 'orange'}
                    variant={colorMode === 'light' ? 'solid' : 'outline'}
                >
                    {colorMode === 'light' ? <SunIcon style={iconSize}/> : <MoonIcon style={iconSize}/>}
                </Button>
            </Box>
        </Flex>
    )
}

export default Navbar