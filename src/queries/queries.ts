import { gql } from '@apollo/client';
import { RepositoryType } from '../types/types';


// Query to get user details
export const GetUserDetails = gql`
    query {
      viewer {
        name
        email
        login
        avatarUrl
        bio
        websiteUrl
        location
        followers {
          totalCount
        }
        following {
            totalCount
        }
      }
    }
  `;


  // Query to get repository count of a user
export const GetRepositoryCount = gql`
query {
  viewer {
    repositories {
      totalCount
    }
  }
}
`;


// Function to search for user repositories by keyword, user name, repository type, and language
export function SearchUserRepositoriesBytypeAndByLanguage(
  keyWord: string,
  userName: string | null,
  repoType: string  | null =null,
  language: string | null  =null
) {
  // GraphQL query to search user repositories
  return gql`
  {
    search(
      query: "user:${userName} ${keyWord} in:name ${repoType ? `is:${repoType}` : ''} ${language ? `language:${language}` : ''}"
      type: REPOSITORY
      first: 100
    ) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          name
          url
          updatedAt
          description
          isPrivate
          isArchived
          isFork
          isMirror
          isTemplate
          primaryLanguage {
            name
          }
          owner {
            login
            url
          }
        }
      }
    }
  }
`};