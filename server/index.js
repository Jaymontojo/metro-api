const { setupExpressServer } = require("./server");
const PORT = process.env.PORT || 3000;

const app = setupExpressServer();
app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`)
});