import { Box, Heading } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <Box py={4}>
            <Heading as='h1' size='2xl' style={{textTransform: "uppercase"}}>Gallery</Heading>
        </Box>
    )
}

export default Navbar