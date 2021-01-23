const { Router } = require('express');
const { Client } = require('pg');

const router = Router();

const client = new Client({
  port: 5432,
  host: 'db',
  user: 'postgres',
  password: 'postgres',
  database: 'postgres',
});

router.get('/api', async (req, res) => {
  const database = await client.query('SELECT * from users')
    .then(res => res.rows).catch(() => 'down');

  res.send({
    environment: process.env.NODE_ENV,
    database,
  });
});

module.exports = { client, router };
