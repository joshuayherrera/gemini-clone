import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Context.jsx'
import cardData from "./components/Main/Main.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider cards={cardData}>
    <App />
  </ContextProvider>,
)
