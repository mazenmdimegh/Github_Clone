import { gql } from '@apollo/client';

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
export const GetRepositories = gql`
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
        repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
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
  `;
export function SearchUserRepositories(
  keyWord: string,
  userName: string
) {
  return  gql`
{
  search(
    query: "user:${userName} ${keyWord}  in:name "
    type: REPOSITORY
    first: 100
  ) {
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
export const GetRepositoryCount = gql`
query {
  viewer {
    repositories {
      totalCount
    }
  }
}
`;