import './App.css';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <div className="App">
      <Greeting isLoggedIn={false} />
    </div>
  );
}

export default App;
