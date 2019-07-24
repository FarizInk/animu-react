import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto'
import App from './App'
import './css/index.css'
import dotenv from 'dotenv'
import storeRedux from './MyRedux'
import { Provider } from 'react-redux'

dotenv.config()

render(
  <Provider store={storeRedux}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)