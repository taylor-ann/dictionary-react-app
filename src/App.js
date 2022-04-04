import Dictionary from "./Dictionary";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary
        </header>
        <main>
          <Dictionary defaultKeyword="Succulent" />
        </main>
        <footer className="App-footer">
          <small>
            Coded By{" "}
            <a
              href="https://www.linkedin.com/in/taylor-mattscheck-7b1a781a1/"
              target="_blank"
              rel="noreferrer"
            >
              Taylor Mattscheck
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/taylor-ann/dictionary-react-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://dapper-klepon-8157af.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
