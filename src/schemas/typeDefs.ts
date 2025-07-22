const typeDefs = `
  type User {
    _id: ID,
    id: Int,
    username: String,
    password: String
  }

  type Query {
    users: [User]
  }
`;

export default typeDefs;
