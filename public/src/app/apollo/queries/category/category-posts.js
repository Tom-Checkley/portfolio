import gql from 'graphql-tag';

const CATEGORY_POSTS_QUERY = gql`
    query Categories($urlSlug: String!) {
        categories(where: {urlSlug: $urlSlug}) {
            id
            name
            urlSlug
            posts {
                id
                urlSlug
                postHeading
                categories {
                    id
                    name
                    urlSlug
                }
                languages {
                    id
                    name
                    urlSlug
                }
                published_at
            }
        }
    }
`;

export default CATEGORY_POSTS_QUERY;