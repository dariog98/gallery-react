import { Link as ReachLink } from "react-router-dom"
import { HeartIcon, UserIcon } from "@heroicons/react/24/outline"
import { Box, Flex, Image, Link } from "@chakra-ui/react"

function GalleryItem({data}) {
    return (
        <Box flexGrow={1} position="relative" className="photo-box">
            <Link as={ReachLink} to={`/item/${data.id}`}>
                <Image src={data.urls.regular} alt={data.title} height={400} w="100%" fit="cover"/>
            </Link>

            <Box position="absolute" bottom="0" left="0" right="0" h="3rem" background="#00000080" px={4} color='white'>
                <Flex h="100%" justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={1}>
                        <HeartIcon style={{width: "1.5rem", height: "1.5rem"}}/>
                        <div>{data.likes}</div>
                    </Flex>

                    <Flex alignItems="center" gap={1}>
                        <UserIcon style={{width: "1.5rem", height: "1.5rem"}}/>
                        <div>{data.user.name}</div>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default GalleryItem;