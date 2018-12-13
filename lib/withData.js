import withApollo from 'next-with-apollo';
import { ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'
import { setContext } from 'apollo-link-context'
import { API_LINK } from '../config';
import { AUTH_TOKEN } from '../src/constants'
import lStorage from 'localStorage'

const token = lStorage.getItem(AUTH_TOKEN);
const LinkHttp = new HttpLink({
  uri: API_LINK
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

function createClient(props) {
  return new ApolloClient({
    link: authLink.concat(LinkHttp),
    cache: new InMemoryCache().restore({})
  });
}

export default withApollo(createClient);