import { Box, Heading } from "@chakra-ui/react"
import { Link as ReachLink } from "react-router-dom"
import RoutesNavigation from "../constants/RoutesNavigation"

const Navbar = () => {
    return (
        <Box py={4}>
            <Heading as={ReachLink} to={RoutesNavigation.Home} size='2xl' style={{textTransform: "uppercase"}}>Gallery</Heading>
        </Box>
    )
}

export default Navbar