import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import RoutesNavigation from "../constants/RoutesNavigation"
import { photos } from "../services"

const useCollections = (search) => {
    const navigate = useNavigate()
    const order = "popular"
    const [collections, setCollections] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [inputSearch, setInputSearch] = useState("")

    const fetchCollection = async () => {
        try {
            setLoading(true)
            const response = search
                            ? await photos.getSearchPhotos(search, page, order)
                            : await photos.getPhotos(page, order)
            if (response.ok) {
                const result = await response.json()
                const collection = search ? result.results : result
                setCollections([ collection ])
                setLoading(false)
            } else {
                console.log(response)
                setLoading(false)
            }
        } catch (error) {
            console.log(error.message)
            setLoading(false)
        }
    }

    const getMorePhotos = async () => {
        try {
            const response = search
                            ? await photos.getSearchPhotos(search, page + 1, order)
                            : await photos.getPhotos(page + 1, order)
            setPage(page + 1)
            if (response.ok) {
                const result = await response.json()
                const collection = search ? result.results : result
                setCollections([...collections, collection])
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log(console.error())
        }
    }

    const handleInputSearch = ({target}) => {
        if (target.value.length === 0 && search) {
            setPage(1)
            navigate(RoutesNavigation.Home)
        }
        setInputSearch(target.value)
    }

    const handleSearch = ({key}) => {
        if (key === 'Enter') {
            setPage(1)
            navigate(`/${inputSearch}`)
        }
    }

    useEffect(() => {
        fetchCollection()
    }, [search])

    return { loading, collections, getMorePhotos, inputSearch, handleInputSearch, handleSearch }
}

export default useCollections