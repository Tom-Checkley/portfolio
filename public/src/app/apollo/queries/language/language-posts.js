import gql from 'graphql-tag';

const LANGUAGE_POSTS_QUERY = gql`
    query Language($id: ID!) {
        language(id: $id) {
            id
            name
            posts {
                id
                postHeading
                categories {
                    id
                    name
                }
                languages {
                    id
                    name
                }
                published_at
            }
        }
    }
`;

export default LANGUAGE_POSTS_QUERY;