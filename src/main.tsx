import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PrimeReactProvider } from "@primereact/core";
import { customTheme } from './theme';
import { ThemeProvider } from './context/ThemeContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider theme={customTheme}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </PrimeReactProvider>
  </StrictMode>,
)
