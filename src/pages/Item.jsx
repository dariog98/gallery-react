import {useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

import RoutesNavigation from '../constants/RoutesNavigation'
import photosServices from '../services/photos'

const Item = () => {
    const params = useParams()
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchItem = async () => {
        try {
            const response = await photosServices.getPhoto(params.id)
            if (response.ok) {
                const item = await response.json()
                if (item) {
                    setItem(item)
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
    }, [])

    return (
        !loading
        ? (
            item ?
            <div className="item-page">
                <img src={item.urls.raw} alt={item.title}/>
                {/*
                <div className="item-content">
                    {item.alt_description}
                </div>
                */}
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="uppercase">ID</td>
                                <td>{item.id}</td>
                            </tr>
                            <tr>
                                <td className="uppercase">Dimensions</td>
                                <td>{`${item.width} x ${item.height}`}</td>
                            </tr>
                            <tr>
                                <td className="uppercase">alt_description</td>
                                <td>{item.alt_description}</td>
                            </tr>
                            <tr>
                                <td className="uppercase">user</td>
                                <td><Link to={`${RoutesNavigation.Users}/${item.user.username}`}>{item.user.username}</Link></td>
                            </tr>
                            <tr>
                                <td className="uppercase">likes</td>
                                <td>{item.likes}</td>
                                <td className="uppercase">downloads</td>
                                <td>{item.downloads}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            :
            <div className="flex flex-column align-items-center justify-content-center gap-1" style={{height: "100%"}}> 
                <div>¡Error!</div>
                <div>Item not found</div>
            </div>
        ) 
        : <Loading/>
    )
}

export default Item;