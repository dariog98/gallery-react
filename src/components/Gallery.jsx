import { Flex } from "@chakra-ui/react";
import GalleryItem from "./GalleryItem";

const Gallery = ({ collections }) => {
    return (
        <>
            <Flex direction="column" gap={4}>
                {collections.map((collection, index) => (
                    <Flex key={index} gap={4} flexWrap="wrap">
                        {collection.map((item, jndex) => (
                            <GalleryItem key={jndex} data={item}/>
                        ))}
                    </Flex>
                ))}
            </Flex>
        </>
    )
}

export default Gallery