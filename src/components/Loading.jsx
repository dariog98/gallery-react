import { CircularProgress, Flex } from "@chakra-ui/react"

const Loading = () => {
    return (
        <Flex direction="column" alignItems="center" justifyContent="center" h="100%" gap={2}>
            <CircularProgress isIndeterminate/>
            <div>Loading...</div>
        </Flex>
    )
}

export default Loading