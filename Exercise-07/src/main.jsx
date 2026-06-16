import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MouseMovement from './MouseMovement'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MouseMovement/>
  </StrictMode>,
)
