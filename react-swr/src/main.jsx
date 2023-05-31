import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { preload } from 'swr'
import { endPointApi as cacheKey, fetchTodos } from './api/mainApi.js'

preload(cacheKey,fetchTodos)

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
