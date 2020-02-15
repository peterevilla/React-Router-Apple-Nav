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
      <Route path="/Mac" render={routeProps => { return (<Mac match={routeProps.match}/>);}}/>
      <Route path="/Ipad" render={routeProps => { return (<Ipad match={routeProps.match}/>);}}/>
      <Route path="/Iphone" render={routeProps => { return (<Iphone match={routeProps.match}/>);}}/>
      <Route path="/Watch" render={routeProps => { return (<Watch match={routeProps.match}/>);}}/>
      <Route path="/TV" render={routeProps => { return (<TV match={routeProps.match}/>);}}/>
      <Route path="/Music" render={routeProps => { return (<Music match={routeProps.match}/>);}}/>
      <Route path="/Support" render={routeProps => { return (<Support match={routeProps.match}/>);}}/>
    </div>
  );
}

export default App;







