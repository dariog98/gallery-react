import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const root = createRoot(document.getElementById('app'))

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript/>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
)