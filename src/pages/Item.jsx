import {useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import RoutesNavigation from '../constants/RoutesNavigation'
import photosServices from '../services/photos'
import Loading from '../components/Loading';

const Item = () => {
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
    }, [])

    return (
        !loading
        ? (
            item ?
            <div className="flex flex-column align-items-center item-page">
                <img src={item.urls.raw} alt={item.title}/>
                <div className="py-1"></div>
                <div>
                    <table className="table">
                        <tbody>
                            {item.alt_description &&
                            <tr>
                                <td className="uppercase text-right bold">Description</td>
                                <td>{item.alt_description}</td>
                            </tr>}
                            <tr>
                                <td className="uppercase text-right bold">Dimensions</td>
                                <td>{`${item.width} x ${item.height}`}</td>
                            </tr>
                            <tr>
                                <td className="uppercase text-right bold">user</td>
                                {/*<td><Link to={`${RoutesNavigation.Users}/${item.user.username}`}>{item.user.username}</Link></td>*/}
                                <td>{item.user.username}</td>
                            </tr>
                            <tr>
                                <td className="uppercase text-right bold">likes</td>
                                <td>{item.likes}</td>
                            </tr>
                            <tr>
                                <td className="uppercase text-right bold">downloads</td>
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