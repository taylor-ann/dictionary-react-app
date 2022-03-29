import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
        <Dictionary defaultKeyword="Sunrise" />
      </main>
      <footer className="text-center">Coded By Taylor Mattscheck</footer>
      </div>
    </div>
  );
}

export default App;
