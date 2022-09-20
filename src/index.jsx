import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
  const root = document.createElement('div');
  document.querySelector('body').appendChild(root);
  ReactDOM.createRoot(root).render(<App />);
}

main();