import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import {AuthProvider} from "./context/auth-context.tsx";
import '@fontsource/roboto/400.css'; // Для обычного текста
import '@fontsource/roboto/500.css'; // Для текста средней толщины
import '@fontsource/roboto/700.css'; // Для текста жирным

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
          <App/>
      </AuthProvider>
  </StrictMode>,
)
