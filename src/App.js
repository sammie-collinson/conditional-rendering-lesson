import './App.css';
import React, {useState} from 'react';
import Greeting from './components/Greeting';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';

const App = () => {

  const [isLoggedIn, toggleLogin] = useState(false);

  const handleLoginClick = () => toggleLogin(true);
  const handleLogoutClick = () => toggleLogin(false);

  let button;
  if(isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick}/>
  } else {
    button = <LoginButton onClick={handleLoginClick}/>
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
