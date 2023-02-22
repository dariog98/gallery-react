import { Flex } from "@chakra-ui/react"
import GalleryPhoto from "./GalleryPhoto"

const Gallery = ({ collections }) => {
    return (
        <>
            <Flex direction="column" gap={4}>
                {collections.map((collection, index) => (
                    <Flex key={index} gap={4} flexWrap="wrap">
                        {collection.map((item, jndex) => (
                            <GalleryPhoto key={jndex} data={item}/>
                        ))}
                    </Flex>
                ))}
            </Flex>
        </>
    )
}

export default Gallery