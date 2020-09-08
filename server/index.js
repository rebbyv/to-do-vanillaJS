const express = require('express');
const port = process.env.PORT || 2000;
const app = express();

app.use(express.static('client/dist'));

app.listen(port, (err) => {
  err ? console.log(`Express connection error ${err}`): console.log(`Express server listening on port: ${port}`);
})