import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto'
import App from './App'
import './css/index.css'
import dotenv from "dotenv"

dotenv.config()

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)