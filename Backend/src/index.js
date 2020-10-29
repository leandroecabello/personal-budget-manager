if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./app/app");
const { db } = require("./database");

(async function main() {
  try {
    await db.dbConnection();
    await db.dbSyncTables();

    await app.listen(app.get("port"), () => {
      console.log(`Server on Port: ${app.get("port")}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
