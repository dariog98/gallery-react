import { Flex, Text, Link } from '@chakra-ui/react'
import { GlobeAltIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const iconSize = { width: "1.25rem", height: "1.25rem" }

const Footer = () => {
    return (
        <Flex alignItems='center' justifyContent='space-around' py='4' gap='4'>
            <Link href='https://github.com/dariog98' display='flex' alignItems='center' gap='2'>
                <UserCircleIcon style={iconSize}/>
                <Text>by dariog98</Text>
            </Link>

            <Link href='https://github.com/dariog98/gallery-react' display='flex' alignItems='center' gap='2'>
                <GlobeAltIcon style={iconSize}/>
                <Text>source code</Text>
            </Link>
        </Flex>
    )
}

export default Footer