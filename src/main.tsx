import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import {AuthProvider} from "./context/auth-context.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
          <App/>
      </AuthProvider>
  </StrictMode>,
)
