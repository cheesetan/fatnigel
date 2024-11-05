import './App.css';
import fatty from './fatty.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img
          src={fatty}
          style={{ height: "100svh" }}
        />
      </header>
    </div>
  );
}

export default App;
