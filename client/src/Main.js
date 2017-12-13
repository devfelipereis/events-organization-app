import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Events from './Events';

const Home = () => (
  <div>
    <h1>Welcome to events organization app</h1>
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/events" component={Events} />
    </Switch>
  </main>
);

export default Main;
