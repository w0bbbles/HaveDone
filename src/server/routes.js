module.exports = (app, db) => {
  const tasks = require('./controllers/taskControllers')(db);

  app.get('/alltasks', tasks.getAll);
};