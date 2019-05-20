import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
    locale: String
    themeType: String
    navStyle: String
    pathname: String
    navCollapsed: Boolean
    width: Int
  }
`;

export default typeDefs;
