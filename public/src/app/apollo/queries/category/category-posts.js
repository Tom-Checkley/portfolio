import gql from 'graphql-tag';

const CATEGORY_POSTS_QUERY = gql`
    query Category($id: ID!) {
        category(id: $id) {
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

export default CATEGORY_POSTS_QUERY;