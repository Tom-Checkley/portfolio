import gql from 'graphql-tag';

const BLOG_LIST_QUERY = gql`
    query Posts {
        posts {
            id
            postHeading
            urlSlug
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
`;

export default BLOG_LIST_QUERY;