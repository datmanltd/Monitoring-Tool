import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TimeRangeProvider } from './contexts/TimeRangeContext.tsx';
import { ScrollControlProvider } from './contexts/ScrollControlContext.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TimeRangeProvider>
      <ScrollControlProvider>
      <App />
      </ScrollControlProvider>
    </TimeRangeProvider>
  </StrictMode>
);
