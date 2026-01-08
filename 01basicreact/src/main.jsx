import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as  _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
