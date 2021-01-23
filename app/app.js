const express = require('express');
const { client, router } = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.get('/', (req, res) => {
  res.json({
    express: 'connected',
  });
});

client.connect(() => {
  app.listen(PORT, () => {
    console.log('Started at http://localhost:%d', PORT);
    console.log('Database at http://localhost:%d/api', PORT);
  });
});
