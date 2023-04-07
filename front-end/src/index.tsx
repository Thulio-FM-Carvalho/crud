import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('container') ?? document.createElement('div');
createRoot(container).render(<App />);
  