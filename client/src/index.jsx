import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponentsGallery from "./pages/components-gallery";
import { HashRouter, Switch, Route } from 'react-router-dom';
import Index from "./pages/index.jsx";
import Property from "./pages/property";
import NotFoundError from "./components/notFoundError/notFoundError";



export default class App extends React.Component  {
  render() {
    return (
      <React.StrictMode>  
        <HashRouter basename=".">
          <Switch>
            <Route path="/component_gallery" component={ComponentsGallery} />

            <Route path="/page_not_found" component={NotFoundError} />

            <Route path="/:property_id" component={Property} />
          
            <Route path="/" component={Index} />

          </Switch>  
        </HashRouter>
      </React.StrictMode>
    )
  }
}

async function main() {
  const root = document.createElement('div');
  const modalRoot = document.createElement('div');
  modalRoot.id = 'modal-root';
  document.querySelector('body').appendChild(root);
  document.querySelector('body').appendChild(modalRoot);
  document.querySelector('body').appendChild(modalRoot);
  ReactDOM.createRoot(root).render(<App />);
}

main();