import logo from './logo.svg';
import './App.css';

import { test, getBlockchainInfo, getNetworkInfo } from "./services/DLCService"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={test}>
          Get test signature data
        </button>
        <button onClick={getBlockchainInfo}>
          Get blockchain info
        </button>
        <button onClick={getNetworkInfo}>
          Get network info
        </button>
      </header>
    </div>
  );
}

export default App;
