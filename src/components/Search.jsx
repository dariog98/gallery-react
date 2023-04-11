import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

const Search = ({search, handleInputSearch, handleSearch}) => {
    return (
        <Flex>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<MagnifyingGlassIcon style={{color: "#CBD5E0", width: "1.25rem", height: "1.25rem"}}/>}
                />
                <Input type='tel' placeholder="Search" value={search} onChange={handleInputSearch} onKeyDown={handleSearch}/>
            </InputGroup>
        </Flex>
    )
}

export default Search