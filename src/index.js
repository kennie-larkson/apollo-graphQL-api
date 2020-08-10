const { ApolloServer, gql } = require("apollo-server");

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

const listOfBooks = [
  {
    idOfBook: 1,
    nameOfBook: "Book 1",
    nameOfAuthor: "Kennie",
  },
  {
    idOfBook: 2,
    nameOfBook: "Book 2",
    nameOfAuthor: "Lawal",
  },
  {
    idOfBook: 3,
    nameOfBook: "Book 3",
    nameOfAuthor: "Larkson",
  },
];

const resolvers = {
  Query: {
    books: () => listOfBooks,
    book: (idOfBook) =>
      listOfBooks.filter((book) => {
        book.idOfBook === idOfBook;
      }),
  },
};
const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen().then(() => {
  console.log(`Server is running... `);
});
