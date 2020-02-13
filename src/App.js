import React from 'react';
import './App.css';
import NavWrapper from './Components/NavWrapper'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mac from './Components/Mac';
import Ipad from './Components/Ipad';
import Iphone from './Components/Iphone';
import Watch from './Components/Watch';
import TV from './Components/TV';
import Music from './Components/Music';
import Support from './Components/Support';


function App() {
  return (
    <div className="App">
      <Route path="/" component={NavWrapper} />
      <Route path="/Mac" component={Mac} />
      <Route path="/Ipad" component={Ipad} />
      <Route path="/Iphone" component={Iphone} />
      <Route path="/Watch" component={Watch} />
      <Route path="/TV" component={TV} />
      <Route path="/Music" component={Music} />
      <Route path="/Support" component={Support} />
    </div>
  );
}

export default App;
