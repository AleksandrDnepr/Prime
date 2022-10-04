import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponentsGallery from "./pages/components-gallery";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Index from "./pages/index.jsx";
import Property from "./pages/property";
import NotFoundPage from "./pages/notFoundPage";



export default class App extends React.Component  {
  render() {
    return (
      <React.StrictMode>  
        <BrowserRouter>
          <Switch>
            <Route path="/component_gallery" component={ComponentsGallery} />

            <Route path="/properties/:property_id" component={Property} />
          
            <Route path="/properties" component={Index} />

            <Redirect from="/" exact={true} to="/component_gallery" />

            <Route component={NotFoundPage} />
          </Switch>  
        </BrowserRouter>
      </React.StrictMode>
    )
  }
}

function main() {
  const root = document.createElement('div');
  document.querySelector('body').appendChild(root);
  ReactDOM.createRoot(root).render(<App />);
}

main();