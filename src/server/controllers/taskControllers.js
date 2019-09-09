module.exports = (db) => {
  let getAll = (request, response) => {

    db.alltasks.getAll((error, alltasks) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting alltasks', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({alltasks: alltasks});
      }
    });
  };

  return {
    getAll: getAll
  };
};