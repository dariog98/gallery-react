import { useEffect, useState } from "react"
import photosServices from "../services/photos"

const usePhoto = (idPhoto) => {
    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchPhoto = async () => {
        try {
            setLoading(true)
            const request = await photosServices.getPhoto(idPhoto)
            if (request.ok) {
                const response = await request.json()
                if (response) {
                    setPhoto(response)
                    setLoading(false)
                }
            } else {
                console.log(request)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        fetchPhoto()
    }, [idPhoto])

    return { loading, photo }
}

export default usePhoto