import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import {User} from './06/06-callbacks.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <User />
  </StrictMode>,
)
