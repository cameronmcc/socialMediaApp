import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';
import Home from './Screens/Home/Home.js';
import Profile from './Screens/Profile/Profile.js';

function App() {
  // const [data1, setData1] = React.useState(null);

  // fetch('http://localhost:5000')
  //   .then((res) => res.json())
  //   .then((data) => setData1(data));
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/register'>
          <Signup />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/signup'>
          <Signup />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/profile/:username'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
