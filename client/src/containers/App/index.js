/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import EventsPage from '../EventsPage';
import NotFoundPage from '../NotFoundPage';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Events organization app"
        defaultTitle="Events organization app"
      >
        <meta name="description" content="An Events organization app" />
      </Helmet>
      <header>header</header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventsPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <footer>footer</footer>
    </div>
  );
}
