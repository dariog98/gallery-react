import { Flex } from '@chakra-ui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const NotFoundPage = () => {
    return (
        <Flex direction="column" alignItems="center" justifyContent="center" h="100%" gap={4}> 
            <ExclamationTriangleIcon style={{width: "3rem", height: "3rem"}}/>
            <div>Error 404</div>
            <div>Page not found</div>
        </Flex>
    )
}

export default NotFoundPage