import { API_ROUTES, API_URL, CLIENT_ID } from "../constants/API"

const getUserPhotos = (username, page) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: `Client-ID ${CLIENT_ID}`
        }
    }
    const url = `${API_URL}/${API_ROUTES.Users}/${username}/${API_ROUTES.Photos}/?page=${page}&per_page=30`
    const response = fetch(url, options)

    return response
}

const getUser = (username) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: `Client-ID ${CLIENT_ID}`
        }
    }
    const url = `${API_URL}/${API_ROUTES.Users}/${username}`
    const response = fetch(url, options)

    return response
}

const usersServices = { getUserPhotos, getUser }

export default usersServices