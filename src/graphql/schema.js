const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    books: [Book]
    book(idOfBook: Int): Book
    #authors: [Author]
    #author(id: ID): Author
  }

  type Book {
    idOfBook: Int
    nameOfBook: String
    nameOfAuthor: String
  }
`;

module.exports = typeDefs;
