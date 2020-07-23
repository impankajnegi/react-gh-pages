import React from 'react'; 
import './App.css';
import PnContainer from './Components/Container'; 
import Button from '@material-ui/core/Button';
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'

function App() {
  return (
    <div className="app">
       {/* <SignUp></SignUp> */}
       <SignIn></SignIn>
    </div>
 
  );
}

export default App;
