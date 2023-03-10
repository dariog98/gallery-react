import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@fontsource/ubuntu'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript/>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
);
