import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar';
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users'; 

function App() {

  return (
    <BrowserRouter>
      <main>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Posts}  />
        <Route path="/users" component={Users} />
      </Switch>
      </main>
    </BrowserRouter>
    );
}

export default App;
