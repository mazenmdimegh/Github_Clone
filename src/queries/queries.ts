import {gql } from '@apollo/client';

export const GetRepositories = 
gql`
    query {
      viewer {
        repositories(first: 100) {
          nodes {
            name
            url
            primaryLanguage {
              name
            }
            createdAt
          }
        }
      }
    }
  `