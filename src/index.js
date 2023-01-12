import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import logger from 'redux-logger';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
const counterStore= createStore(reducers,applyMiddleware(thunk,logger))

root.render(
  <BrowserRouter>
   <Provider store={counterStore}>
   <ChakraProvider> 
       <App/>
  </ChakraProvider>
   </Provider>

  </BrowserRouter>
);

