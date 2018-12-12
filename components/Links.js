import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const QUERY_FEED = gql`
    {
        feed {
            id
            url
            description
        }
    }
`;

const Link = ({ link }) => (
    <div>
        <p>ID: { link.id }</p>
        <p>Description: { link.description }</p>
        <p>URL: { link.url }</p>
    </div>
)

class Links extends Component {
  render() {
    return (
        <Query query={QUERY_FEED}>
            {
                ({loading, error, data}) => {
                    if (loading) return <div>Loading...</div>
                    if (error) return <div>Fails xD</div>

                    return (
                        <div>
                            { data.feed.map(link => <Link key={link.id} link={ link } />) }
                        </div>
                    )
                   
                }
            }
        </Query>
    )
  }
}

export default Links;