import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

// کامپوننت اشکال متحرک شناور
const FloatingShapes = () => (
  <div className="floating-shapes">
    <div className="shape shape-1"></div>
    <div className="shape shape-2"></div>
    <div className="shape shape-3"></div>
    <div className="shape shape-4"></div>
    <div className="shape shape-5"></div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FloatingShapes />
    <App />
  </React.StrictMode>,
)