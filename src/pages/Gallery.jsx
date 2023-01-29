import {useState, useEffect } from 'react';

import GalleryItem from '../components/GalleryItem';
import photosServices from '../services/photos';

function Gallery() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1)

    const fetchItems = async () => {
        try {
            const response = await photosServices.getPhotos(page)
            if (response.ok) {
                const fetchItems = await response.json()
                setItems(fetchItems)
                console.log(fetchItems[0])
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchItems: ' + error.message)
        }
    }

    const getMorePhotos = async () => {
        try {
            const response = await photosServices.getPhotos(page + 1)
            setPage(page + 1)
            if (response.ok) {
                const newItems = await response.json()
                setItems([...items, ...newItems])
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchItems: ' + error.message)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])
    
    return (
        <>
            <div className="flex flex-column align-items-center gap-1 item-page">
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