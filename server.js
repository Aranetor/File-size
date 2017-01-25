const express       = require('express');

const app           = express();

const port          = 3000;

require('./app/routes')(app);

app.listen(process.env.PORT || port, () => {
  console.log('We are live on ' + port);
});
