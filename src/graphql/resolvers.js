const listOfBooks = require("./datasource");

const resolvers = {
  Query: {
    books: () => listOfBooks,
    book: (idOfBook) =>
      listOfBooks.filter((book) => {
        book.idOfBook === idOfBook;
      }),
  },
};

module.exports = resolvers;
