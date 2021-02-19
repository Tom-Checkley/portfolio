import gql from 'graphql-tag';

const LANGUAGE_POSTS_QUERY = gql`
    query Languages($urlSlug: String!) {
        languages(where: {urlSlug: $urlSlug}) {
            id
            urlSlug
            name
            posts {
                id
                urlSlug
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