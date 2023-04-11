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
    const url = `${API_URL}/${API_ROUTES.Photos}/${id}?client_id=${CLIENT_ID}`
    const response = fetch(url)
    return response
}

const getRandomPhoto = () => {
    const url = `${API_URL}/${API_ROUTES.Photos}/random?client_id=${CLIENT_ID}`
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

const photos = { getPhotos, getPhoto, getRandomPhoto, getSearchPhotos }

export default photos