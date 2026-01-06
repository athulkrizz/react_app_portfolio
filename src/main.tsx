import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PrimeReactProvider } from "@primereact/core";
import { customTheme } from './theme';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider theme={customTheme}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
