import gql from "graphql-tag";

export const updatePageName = (_, { name }, { cache }) => {
  // Example
  //   const query = gql`
  //     query GetPageName {
  //       apolloClientDemo @client {
  //         currentPageName
  //       }
  //     }
  //   `;

  //   const previousState = cache.readQuery({ query });

  //   const data = {
  //     apolloClientDemo: {
  //       …previousState.apolloClientDemo,
  //       currentPageName: name,
  //     },
  //   };

  //   cache.writeQuery({
  //     query,
  //     data,
  //   });

  return null;
};
