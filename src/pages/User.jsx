import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GalleryItem from '../components/GalleryItem';
import Loading from '../components/Loading';
import usersServices from '../services/users';

const Item = () => {
    const params = useParams()
    const [page, setPage] = useState(1)
    const [user, setUser] = useState(null)
    const [items, setItems] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchUser = async () => {
        try {
            const response = await usersServices.getUser(params.username)
            if (response.ok) {
                const fetchUser = await response.json()
                if (fetchUser) {
                    console.log(fetchUser)
                    setUser(fetchUser)
                }
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchUser: ' + error.message)
        }
    }

    const fetchPhotos = async () => {
        try {
            const response = await usersServices.getUserPhotos(params.username, page)
            if (response.ok) {
                const photos = await response.json()
                if (photos) {
                    setItems(photos)
                    setLoading(false)
                }
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchPhotos: ' + error.message)
        }
    }

    const getMorePhotos = async () => {
        try {
            const response = await usersServices.getUserPhotos(params.username, page + 1)
            setPage(page + 1)
            if (response.ok) {
                const photos = await response.json()
                setItems([...items, ...photos])
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log('fetchMorePhotos: ' + error.message)
        }
    }

    useEffect(() => {
        fetchUser()
        fetchPhotos()
    }, [])

    return (
        !loading
        ?
            <>
                {
                    user &&
                    <div className="box flex flex-column gap-1 mx-2 p-2">
                        <h1>{user.name}</h1>
                    </div>
                }
                <div className="py-1"></div>
                {
                    items ?
                    <div className="flex flex-column align-items-center gap-1 mx-2">
                        <div className="flex flex-wrap gap-1">
                            {items.map((item, index) => (
                                <GalleryItem key={index} data={item}/>
                            ))}
                        </div>

                        <button className="square-button" onClick={getMorePhotos}> Get more </button>
                    </div>
                    :
                    <div className="flex flex-column align-items-center justify-content-center gap-1" style={{height: "100%"}}> 
                        <div>¡Error!</div>
                        <div>Item not found</div>
                    </div>
                }
            </>
        : <Loading/>
    )
}

export default Item;