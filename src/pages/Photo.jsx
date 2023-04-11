import { Flex, Image, Table, TableContainer, Tbody, Tr, Td, Card, CardBody, Button } from '@chakra-ui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import usePhoto from '../hooks/usePhoto'

const rowDescription = { textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'right' }

const PhotoPage = () => {
    const params = useParams()
    const { loading, photo } = usePhoto(params.id)

    return (
        loading
            ? <Loading/>
            : photo ? 
                    <Flex direction='column' gap={4} maxW='container.lg'>
                        <Image src={photo.urls.regular} alt={photo.title}/>
                        <Card>
                            <CardBody>
                                <Flex direction='column' alignItems='center' gap={4}>
                                    <TableContainer>
                                        <Table size='sm' variant='unstyled'>
                                            <Tbody>
                                                {photo.alt_description &&
                                                <Tr>
                                                    <Td style={rowDescription}>Description</Td>
                                                    <Td>{photo.alt_description}</Td>
                                                </Tr>}
                                                <Tr>
                                                    <Td style={rowDescription}>Dimensions</Td>
                                                    <Td>{`${photo.width} x ${photo.height}`}</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td style={rowDescription }>user</Td>
                                                    {/*<Td><Link to={`${RoutesNavigation.Users}/${photo.user.username}`}>{photo.user.username}</Link></Td>*/}
                                                    <Td>{photo.user.username}</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td style={rowDescription}>likes</Td>
                                                    <Td>{photo.likes}</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td style={rowDescription}>downloads</Td>
                                                    <Td>{photo.downloads}</Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </TableContainer>

                                    <Button as='a'
                                        colorScheme='orange'
                                        href={photo.urls.raw}
                                        style={{ textTransform: 'uppercase' }}
                                        gap={1}>
                                        <ArrowDownTrayIcon style={{width: '1.25rem', height: '1.25rem'}}/>
                                        Download
                                    </Button>
                                </Flex>
                            </CardBody>
                        </Card>
                    </Flex>
                :
                    <Flex direction='column' alignItems='center' justifyContent='center' h='100%' gap={4}> 
                        <ExclamationTriangleIcon style={{width: '3rem', height: '3rem'}}/>
                        <div>¡Error!</div>
                        <div>Photo not found</div>
                    </Flex>
    )
}

export default PhotoPage