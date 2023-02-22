import { Button, Flex } from "@chakra-ui/react"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Gallery from "../components/Gallery"
import Loading from "../components/Loading"
import Search from "../components/Search"
import useCollections from "../hooks/useCollection"

const HomePage = () => {
    const params = useParams()
    const { loading, collections, getMorePhotos, inputSearch, handleInputSearch, handleSearch } = useCollections(params.search)

    return (
        <Flex direction="column" gap={4} alignItems="center" h="100%">
            <Search search={inputSearch} handleInputSearch={handleInputSearch} handleSearch={handleSearch}/>
            {
                loading
                ? <Loading/>
                : collections.length 
                    ? <>
                        <Gallery collections={collections}/>
                        <Button 
                            size="lg"
                            colorScheme="teal"
                            variant="outline"
                            onClick={getMorePhotos}
                            style={{textTransform: "uppercase", width: "10rem"}}
                        >Get More</Button>
                    </>
                    : <>
                        <Flex direction="column" alignItems="center" justifyContent="center" h="100%" gap={4}> 
                            <ExclamationTriangleIcon style={{width: "3rem", height: "3rem"}}/>
                            <div>¡Error!</div>
                            <div>Photos not found</div>
                        </Flex>
                    </>
            }
        </Flex>
    )
}

export default HomePage