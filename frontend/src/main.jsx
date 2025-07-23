
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MealContextProvider from './context/MealContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <MealContextProvider>
      <App />
    </MealContextProvider>
  </BrowserRouter>
  
)
