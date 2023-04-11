import { useColorMode } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { photos } from '../services'
import RoutesNavigation from '../constants/RoutesNavigation'

const useNavbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const location = useLocation()
    const navigate = useNavigate()

    const goToRandomPhoto = async () => {
        try {
            const response = await photos.getRandomPhoto()
            const random = await response.json()
            navigate(`${RoutesNavigation.Photos}/${random.id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        colorMode,
        toggleColorMode,
        location,
        goToRandomPhoto
    }
}

export default useNavbar