import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/';

const App = () => {
  return <React.StrictMode>
    <Header />
  </React.StrictMode>;
}


function main() {
  const root = document.createElement('div');
  document.querySelector('body').appendChild(root);
  ReactDOM.createRoot(root).render(<App />);
}

main();