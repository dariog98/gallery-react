import { Button, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Gallery from "../components/Gallery"
import Loading from "../components/Loading"
import Search from "../components/Search"
import photosServices from "../services/photos"

const HomePage = () => {
    const order = "popular"
    const [page, setPage] = useState(1)
    const [collections, setCollections] = useState([])
    const [searchMode, setSearchMode] = useState(false)
    const [search, setSearch] = useState("")

    const fetchCollection = async (isSearch) => {
        try {
            const response = isSearch ? await photosServices.getSearchPhotos(search, page, order) : await photosServices.getPhotos(page, order)
            if (response.ok) {
                const result = await response.json()
                const fetchCollection = isSearch ? result.results : result
                setCollections([fetchCollection])
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchCollection: ' + error.message)
        }
    }

    const getMorePhotos = async () => {
        try {
            const response = searchMode ? await photosServices.getSearchPhotos(search, page + 1, order) : await photosServices.getPhotos(page + 1, order)
            setPage(page + 1)
            if (response.ok) {
                const result = await response.json()
                const newCollection = searchMode ? result.results : result
                setCollections([...collections, newCollection])
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchCollection: ' + error.message)
        }
    }

    const handleInputSearch = ({target}) => {
        if (target.value.length === 0 && searchMode) {
            if (searchMode) {
                setSearchMode(false)
                setPage(1)
                fetchCollection()
            }
        }
        setSearch(target.value)
    }

    const handleSearch = ({key}) => {
        if (key === 'Enter') {
            setSearchMode(true)
            setPage(1)
            fetchCollection(true)
        }
    }

    useEffect(() => {
        fetchCollection()
    }, [])

    return (
        collections.length ?
        <>  
            <Flex direction="column" gap={4} alignItems="center">
                <Search search={search} handleInputSearch={handleInputSearch} handleSearch={handleSearch}/>
                <Gallery collections={collections}/>
                <Button size="lg" colorScheme="teal" variant="outline" onClick={getMorePhotos} style={{textTransform: "uppercase", width: "10rem"}}>Get More</Button>
            </Flex>
        </>
        : <Loading/>
    )
}

export default HomePage