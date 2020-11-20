import logo from './logo.svg';
import './App.css';
import { useContext } from 'react'
import { GlobalContext } from './Context/GlobalProvider'

function App() {
  const { data } = useContext(GlobalContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data[0].name}
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
