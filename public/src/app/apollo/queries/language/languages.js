import gql from 'graphql-tag';

const LANGUAGES_QUERY = gql`
    query Languages {
        languages {
            id
            name
            urlSlug
        }
    }
`;

export default LANGUAGES_QUERY;