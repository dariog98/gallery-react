import { API_ROUTES, API_URL, CLIENT_ID } from "../constants/API"

const getPhotos = (page) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: `Client-ID ${CLIENT_ID}`
        }
    }
    //const url = `${API_URL}/${API_ROUTES.Photos}/?page=${page}&per_page=30&client_id=${CLIENT_ID}`
    const url = `${API_URL}/${API_ROUTES.Photos}/?page=${page}&per_page=30`
    const response = fetch(url, options)

    return response
}

const getPhoto = (id) => {
    const url = `${API_URL}/${API_ROUTES.Photos}/${id ? id : "random"}?client_id=${CLIENT_ID}`
    const response = fetch(url)

    return response
}

const photosServices = { getPhotos, getPhoto }

export default photosServices