import gql from 'graphql-tag';

const CATEGORIES_QUERY = gql`
    query Categories {
        categories {
            id
            name
            urlSlug
        }
    }
`;

export default CATEGORIES_QUERY;