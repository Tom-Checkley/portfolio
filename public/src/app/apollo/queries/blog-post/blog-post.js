import gql from 'graphql-tag';

const BLOG_QUERY = gql`
    query Posts($urlSlug: String!) {
        posts(where: {urlSlug: $urlSlug}) {
            id
            postHeading
            urlSlug
            banner {
                url
            }
            content {
                ... on ComponentSectionsCode {
                    codeLanguage
                    code
                    classVariants {
                        classVariant
                    }
                }
                ... on ComponentSectionsMedia {
                    sectionHeading
                    media {
                        url
                    }
                    fullWidth
                    classVariants {
                        classVariant
                    }
                }
                ... on ComponentSectionsText {
                    sectionHeading
                    backgroundImage {
                        url
                    }
                    body
                    classVariants {
                        classVariant
                    }
                }
                ... on ComponentSectionsTwoColMedia {
                    sectionHeading
                    media {
                        url
                    }
                    body
                    rtl
                    classVariants {
                        classVariant
                    }
                }
                ... on ComponentSectionsTwoColText {
                    sectionHeading
                    backgroundImage {
                        url
                    }
                    bodyLeft
                    bodyRight
                    classVariants {
                        classVariant
                    }
                }
            }
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

export default BLOG_QUERY;