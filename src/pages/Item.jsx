import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import photosServices from '../services/photos'
import Loading from '../components/Loading';
import { Flex, Image, Table, TableContainer, Tbody, Tr, Td, Card, CardBody, Button } from '@chakra-ui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const rowDescription = {textTransform: "uppercase", fontWeight: "bold", textAlign: "right"}

const ItemPage = () => {
    const params = useParams()
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchItem = async () => {
        try {
            const response = await photosServices.getPhoto(params.id)
            if (response.ok) {
                const fetchItem = await response.json()
                if (fetchItem) {
                    console.log(fetchItem)
                    setItem(fetchItem)
                    setLoading(false)
                }
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchItem: ' + error.message)
        }
    }

    useEffect( () => {
        fetchItem()
    }, [params])

    return (
        !loading
        ? (
            item ?
            <Flex direction="column" gap={4}>
                <Image src={item.urls.regular} alt={item.title}/>
                <Card>
                    <CardBody>
                        <Flex direction="column" alignItems="center" gap={4}>
                            <TableContainer>
                                <Table size="sm" variant="unstyled">
                                    <Tbody>
                                        {item.alt_description &&
                                        <Tr>
                                            <Td style={rowDescription}>Description</Td>
                                            <Td>{item.alt_description}</Td>
                                        </Tr>}
                                        <Tr>
                                            <Td style={rowDescription}>Dimensions</Td>
                                            <Td>{`${item.width} x ${item.height}`}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td style={rowDescription }>user</Td>
                                            {/*<Td><Link to={`${RoutesNavigation.Users}/${item.user.username}`}>{item.user.username}</Link></Td>*/}
                                            <Td>{item.user.username}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td style={rowDescription}>likes</Td>
                                            <Td>{item.likes}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td style={rowDescription}>downloads</Td>
                                            <Td>{item.downloads}</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>

                            <Button as="a" href={item.urls.raw} style={{ textTransform: "uppercase" }} gap={1}>
                                <ArrowDownTrayIcon style={{width: "1.25rem", height: "1.25rem"}}/>
                                Download
                            </Button>
                        </Flex>
                    </CardBody>
                </Card>
            </Flex>
            :
            <Flex direction="column" alignItems="center" justifyContent="center" h="100%" gap={4}> 
                <ExclamationTriangleIcon style={{width: "3rem", height: "3rem"}}/>
                <div>¡Error!</div>
                <div>Photo not found</div>
            </Flex>
        ) 
        : <Loading/>
    )
}

export default ItemPage