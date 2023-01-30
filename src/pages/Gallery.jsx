import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {useState, useEffect } from 'react';

import GalleryItem from '../components/GalleryItem';
import photosServices from '../services/photos';

function Gallery() {
    const [items, setItems] = useState([]);
    const [searchMode, setSearchMode] = useState(false)
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)

    const fetchItems = async () => {
        try {
            const response = await photosServices.getPhotos(page)
            if (response.ok) {
                const fetchItems = await response.json()
                setItems(fetchItems)
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchItems: ' + error.message)
        }
    }

    const fetchSearchItems = async () => {
        try {
            const response = await photosServices.getSearchPhotos(search, page)
            if (response.ok) {
                const fetchItems = await response.json()
                setItems(fetchItems.results)
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchItems: ' + error.message)
        }
    }

    const getMorePhotos = async () => {
        try {
            const response = searchMode ? await photosServices.getSearchPhotos(search, page + 1) : await photosServices.getPhotos(page + 1)
            setPage(page + 1)
            if (response.ok) {
                const res = await response.json()
                const newItems = searchMode ? res.results : res
                setItems([...items, ...newItems])
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchItems: ' + error.message)
        }
    }

    const handleInputSearch = ({target}) => {
        if (target.value.length === 0 && searchMode) {
            setSearchMode(false)
            setItems([])
            setPage(1)
            fetchItems()
        }
        setSearch(target.value)
    }

    const handleSearch = ({key}) => {
        if (key === 'Enter') {
            setSearchMode(true)
            setItems([])
            setPage(1)
            fetchSearchItems()
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])
    
    return (
        <>
            <div className="flex flex-column align-items-center gap-1 item-page">

                <div className="flex">
                    <div className="input-label"><div style={{width: "1.25rem", height: "1.25rem"}}><MagnifyingGlassIcon/></div></div>
                    <input 
                        className="input-form"
                        placeholder="Search"
                        value={search}
                        onChange={handleInputSearch}
                        onKeyDown={handleSearch}
                    />
                </div>

                <div className="flex flex-wrap gap-1">
                    {items.map((item, index) => (
                        <GalleryItem key={index} data={item}/>
                    ))}
                </div>

                <button className="square-button" onClick={getMorePhotos}> Get more </button>
            </div>
        </>
    );
}

export default Gallery;