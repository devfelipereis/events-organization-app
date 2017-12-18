/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, Icon, Segment, Image } from 'semantic-ui-react';

const eventListQuery = gql`
  query EventListQuery {
    events {
      id
      name
      startDate
    }
  }
`;

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {}

  render() {
    let { loading, error, events } = this.props.data;

    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Segment vertical loading={loading}>
          <Card.Group itemsPerRow={4}>
            {events
              ? events.map(e => (
                  <Card color="red" key={e.id}>
                    <Image src="http://wikimotive.com/wikiblog/wp-content/uploads/sites/2/2013/10/events-heavenly-header1.jpg" />
                    <Card.Content>
                      <Card.Header>{e.name}</Card.Header>
                      <Card.Meta>
                        <span>Some small text</span>
                      </Card.Meta>
                      <Card.Description>Some description</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="calendar" />
                        {e.startDate}
                      </a>
                    </Card.Content>
                  </Card>
                ))
              : ''}
          </Card.Group>
        </Segment>
      </div>
    );
  }
}

export default graphql(eventListQuery)(HomePage);
