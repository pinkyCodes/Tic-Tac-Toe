import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GameProvider } from './context/GameContext.tsx';
import './index2.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
)
