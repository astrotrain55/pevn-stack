const path = require('path');
const express = require('express');
const { client, router } = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

client.connect(() => {
  app.listen(PORT, () => {
    console.log('Started at http://localhost:%d', PORT);
    console.log('Database at http://localhost:%d/api', PORT);
  });
});
