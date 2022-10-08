const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  AddTypesToDB,
  getPokemonsDB,
  getTypesDB,
  getPokemonsApi,
} = require("./src/controllers/GetDB.js");
const { Type } = require("./src/db.js");
const data = require("./src/utils");

// Syncing all the models at once.
conn
  .sync({ force: false })
  .then(async () => {
    const tipos = await Type.findAll();
    if (!tipos.length) {
      const r = await AddTypesToDB();
      if (r === "done") {
        var m = await getTypesDB();
      }
    }
    const x = await getTypesDB();
    const y = await getPokemonsApi();
    const z = await getPokemonsDB();
  })
  .then(async (r) => {})
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  });
