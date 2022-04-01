const { setupExpressServer } = require("./server");
const PORT = process.env.PORT || 3000;
const app = setupExpressServer();
const db = require('../knexfile');

(async () => {
  try{
    console.log('applying latest migrations...⏳')
    await db.migrate.latest();
    console.log('applied latest migrations✅')

    app.listen(PORT, () => {
      console.log(`App is listening at http://localhost:${PORT}`)
    });
  } catch (err) {
    console.error(`App failed to start ${err}`);
    process.exit(-1);
  }
})