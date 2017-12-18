import React from 'react';
import { Helmet } from 'react-helmet';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const EVENT_LIST_QUERY = gql`
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
    const { events } = this.props.eventListQuery;

    return (
      <article>
        <Helmet>
          <title>Events Page</title>
          <meta name="description" content="A list of events" />
        </Helmet>
        <div>You are on the events page</div>
        <ul>
          {events
            ? events.map(e => <li key={e.id}>{e.name}</li>)
            : 'No events were found'}
        </ul>
      </article>
    );
  }
}

export default graphql(EVENT_LIST_QUERY, { name: 'eventListQuery' })(
  EventsPage
);
