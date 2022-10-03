import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponentsGallery from "./pages/components-gallery";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from "./pages/index.jsx";
import Property from "./pages/property";



export default class App extends React.Component  {
  render() {
    return (
      <React.StrictMode>  
        <BrowserRouter>
          <Switch>
            <Route path="/:property_id" component={Property} />
          
            <Route path="/component_gallery" component={ComponentsGallery} />

            <Route path="/" exact={true} component={Index} />
            
            {/* <Route component={NotFoundPage} /> */}
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