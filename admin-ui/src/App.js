import "uikit/dist/css/uikit.css";
import "uikit/dist/js/uikit.js";

function App() {
  return (
    <div className="App">
      <ul uk-accordion="true">
        <li>
          <a className="uk-accordion-title" href="#">acardion</a>
          <div className="uk-accordion-content">open</div>
        </li>
      </ul>
      <button className="uk-button uk-button-primary">click me</button>
      <header className="App-header">
        <p>ADMIN UI</p>
      </header>
    </div>
  );
}

export default App;
