import { gql } from "@apollo/client/core";

const REPO_FRAGMENT = gql`
  fragment repo on Repository {
    id
    name
    url
    stargazers {
      totalCount
    }
    viewerHasStarred
    description
    licenseInfo {
      name
    }
    updatedAt
    owner {
      login
      avatarUrl
    }
    primaryLanguage {
      color
      name
    }
    repositoryTopics(first: 10) {
      edges {
        node {
          topic {
            name
          }
        }
      }
    }
  }
`;
// Мутация для создания метки репозитория.
export const ADD_STAR = gql`
  mutation($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;
// Мутация для снятия пометки с репозитория.
export const REMOVE_STAR = gql`
  mutation($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;
// Запрос для получения списка репозиториев на основе переданных ему аргументов.
export const SEARCH_REPOS = gql`
  ${REPO_FRAGMENT}
  query SearchRepoQuery($query: String!, $limit: Int!) {
    search(query: $query, type: REPOSITORY, first: $limit) {
      edges {
        node {
          ...repo
        }
      }
    }
  }
`;

export const ALL_TODOS = gql`
    query AllTodos {
        todos {
        id
        text
        is_completed
        }
    }
`;


export const ALL_FUZZY = gql`
    query AllFuzzy($query: String!, $limit: Int!){
      _fuzzysearch_search(args: {search: $query}, limit: $limit) {
          company
          department
          id
          name
      }
    }
`;    