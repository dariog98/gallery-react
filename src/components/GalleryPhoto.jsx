import { Link as ReachLink } from 'react-router-dom'
import { HeartIcon, UserIcon } from '@heroicons/react/24/solid'
import { Box, Flex, Image, Link, useColorMode } from '@chakra-ui/react'
import RoutesNavigation from '../constants/RoutesNavigation'

const GalleryPhoto = ({data}) => {
    const { colorMode } = useColorMode()
    const color = colorMode === 'light' ? 'black' : 'white'

    const before = {
        display: 'block',
        content: '""',
        width: '1rem',
        height: '1rem',
        position: 'absolute',
        top: 0,
        left: 0,
        borderTop: `1px solid ${color}`,
        borderLeft: `1px solid ${color}`,
    }
    
    const after = {
        display: 'block',
        content: '""',
        width: '1rem',
        height: '1rem',
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderBottom: `1px solid ${color}`,
        borderRight: `1px solid ${color}`,
    }

    return (
        <Box flexGrow={1} position='relative' _before={before} _after={after}>
            <Box m='3'>
                <Box position='relative' style={{minHeight: '300px', minWidth: '300px'}}>
                    <Link as={ReachLink} to={`${RoutesNavigation.Photos}/${data.id}`}>
                        <Image src={data.urls.regular} loading='lazy' alt={data.title} w='100%' height='300px' fit='cover' background='#808080'/>
                    </Link>

                    {/*
                    <Box position='absolute' bottom='0' left='0' right='0' top='0' background='blackAlpha.000' className='hover'></Box>

                    <Box position='absolute' bottom='0' left='0' right='0' h='4rem' px={4}>
                        <Flex h='100%' justifyContent='space-between' alignItems='center'>
                            <Flex alignItems='center' gap={1} background='whiteAlpha.800' color='gray.800' p='2' borderRadius='0.5rem'>
                                <HeartIcon style={{width: '1.5rem', height: '1.5rem'}}/>
                                <div>{data.likes}</div>
                            </Flex>

                            <Flex alignItems='center' gap={1} background='whiteAlpha.800' color='blackAlpha.800' p='2' borderRadius='0.5rem'>
                                <UserIcon style={{width: '1.5rem', height: '1.5rem'}}/>
                                <div>{data.user.name}</div>
                            </Flex>
                        </Flex>
                    </Box>
                    */}

                    <Box position='absolute' bottom='0' left='0' right='0' h='3rem' color='white' background='blackAlpha.700' px={4}>
                        <Flex h='100%' justifyContent='space-between' alignItems='center'>
                            <Flex alignItems='center' gap={1}>
                                <HeartIcon style={{width: '1.5rem', height: '1.5rem'}}/>
                                <div>{data.likes}</div>
                            </Flex>

                            <Flex alignItems='center' gap={1}>
                                <UserIcon style={{width: '1.5rem', height: '1.5rem'}}/>
                                <div>{data.user.name}</div>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default GalleryPhoto