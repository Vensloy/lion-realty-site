
// -- Хуки
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// -- Reset.css
import './reset.css'

// -- Страницы сайта
import Desktop from '../src/assets/pages/desktop/Desktop'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Desktop />
  </StrictMode>,
)
