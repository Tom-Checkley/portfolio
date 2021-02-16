import gql from 'graphql-tag';

const LANGUAGES_QUERY = gql`
    query Languages {
        languages {
            id
            name
        }
    }
`;

export default LANGUAGES_QUERY;