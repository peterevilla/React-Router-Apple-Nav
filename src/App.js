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
import iPad from './Components/iPad';
import iPhone from './Components/iPhone';
import Watch from './Components/Watch';
import TV from './Components/TV';
import Music from './Components/Music';
import Support from './Components/Support';


function App() {
  return (
    <div className="App">
      <Route path="/" component={NavWrapper} />
      <Route path="/Mac" render={routeProps => {   console.log("routeProps", routeProps);  return (<Mac match={routeProps.match}/>);}}/>
      <Route path="/Ipad" component={iPad} />
      <Route path="/Iphone" component={iPhone} />
      <Route path="/Watch" component={Watch} />
      <Route path="/TV" component={TV} />
      <Route path="/Music" component={Music} />
      <Route path="/Support" component={Support} />
    </div>
  );
}

export default App;







