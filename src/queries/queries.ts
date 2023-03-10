import { gql } from '@apollo/client';

export const GetRepositories =
    gql`
    query {
      viewer {
        repositories(first: 100) {
          nodes {
            name
            url
            forkCount
            updatedAt
            description
            primaryLanguage{
                name
            }
          }
        }
      }
    }
  `