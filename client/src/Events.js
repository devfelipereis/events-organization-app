import React from 'react';
import { Switch, Route } from 'react-router-dom';

const EventsPage = () => <div>Test</div>;

const EventDetail = () => <div>EventsDetail</div>;

const Events = () => (
  <div>
    <h2>This is the events page!</h2>
    <Switch>
      <Route exact path="/events" component={EventsPage} />
      <Route path="/events/:id" component={EventDetail} />
    </Switch>;
  </div>
);

export default Events;
