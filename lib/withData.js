import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { API_LINK } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? API_LINK : API_LINK,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);