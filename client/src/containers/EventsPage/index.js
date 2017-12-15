/*
 * EventsPage
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const eventListQuery = gql`
  query EventListQuery {
    events {
      id
      name
    }
  }
`;

export class EventsPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {}

  render() {
    return (
      <article>
        <Helmet>
          <title>Events Page</title>
          <meta name="description" content="A list of events" />
        </Helmet>
        <div>You are on the events page</div>
        <ul>
          {this.props.data.events
            ? this.props.data.events.map(e => <li key={e.id}>{e.name}</li>)
            : 'Nenhum evento encontrado'}
        </ul>
      </article>
    );
  }
}

export default graphql(eventListQuery)(EventsPage);
