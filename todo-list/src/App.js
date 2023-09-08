import logo from './logo.svg';
import './App.css';

function App() {
  return (
    

    <div className="App">
      <h1>My Todo List</h1>
      <MyButton />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function MyButton()
{
  return (
    <button>
      i'm a button
    </button>
  )
}
