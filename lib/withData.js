import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import lStorage from 'localStorage'
import { endpoint, prodEndpoint } from '../config'

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
