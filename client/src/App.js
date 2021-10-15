import logo from './images/logo.jpg';
import background from './images/background.jpg';
import './App.css';

function App() {
  return (
    <div className="App" styles={{ backgroundImage:`url(${background})`}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Gigi's Drink Station App</h1>
      </header>
    </div>
  );
}

export default App;
