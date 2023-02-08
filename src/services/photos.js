import { API_ROUTES, API_URL, CLIENT_ID } from "../constants/API"

const getPhotos = (page, order) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: `Client-ID ${CLIENT_ID}`
        }
    }
    
    const url = `${API_URL}/${API_ROUTES.Photos}/?page=${page}&per_page=30&order_by=${order}`
    const response = fetch(url, options)

    return response
}

const getPhoto = (id) => {
    const url = `${API_URL}/${API_ROUTES.Photos}/${id ? id : "random"}?client_id=${CLIENT_ID}`
    const response = fetch(url)

    return response
}

const getSearchPhotos = (search, page, order) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: `Client-ID ${CLIENT_ID}`
        }
    }
    const url = `${API_URL}/search/${API_ROUTES.Photos}/?query=${search}&page=${page}&per_page=30&order_by=${order}`
    const response = fetch(url, options)

    return response
}

const photosServices = { getPhotos, getPhoto, getSearchPhotos }

export default photosServices