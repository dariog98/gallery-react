import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import RoutesNavigation from "../constants/RoutesNavigation"
import { Link as ReachLink, useLocation } from "react-router-dom"

const iconSize = { width: "1.5rem", height: "1.5rem" }

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const location = useLocation()

    return (
        <Flex alignItems="center" justifyContent="space-between" py={4}>
            <Breadcrumb separator="">
                <BreadcrumbItem color={location.pathname === RoutesNavigation.Home ? "gray.500" : ""}>
                    <BreadcrumbLink as={ReachLink} to={RoutesNavigation.Home}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem color={location.pathname === RoutesNavigation.Random ? "gray.500" : ""}>
                    <BreadcrumbLink as={ReachLink} to={RoutesNavigation.Random}>Random</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Button w="3rem" h="3rem" p={0} m={0} onClick={toggleColorMode}>
                {colorMode === "light" ? <SunIcon style={iconSize}/> : <MoonIcon style={iconSize}/>}
            </Button>
        </Flex>
    )
}

export default Footer