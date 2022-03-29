import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Sunrise" />
        </main>
        <footer className="App-footer">
          <small>Coded By Taylor Mattscheck</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
