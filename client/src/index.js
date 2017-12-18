import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'; // semantic-ui-css

import registerServiceWorker from './registerServiceWorker';

// Import root app
import App from './containers/App';
// graphql
import apolloClient from './apolloClient';

const MOUNT_NODE = document.getElementById('root');

// eslint-disable-next-line
const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </BrowserRouter>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
registerServiceWorker();
