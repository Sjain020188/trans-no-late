module.exports = (knex, query) => {
  return () => {
    return Promise.resolve(
      knex("users")
        .where(query)
        .del()
        .then((users) => {
          return users;
        })
    );
  };
};
