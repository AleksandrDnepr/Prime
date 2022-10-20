const express = require('express');

express()
  .get('/api/status', (req, res) => res.json({ status: 'ok' }))
  .listen(3100, () => console.log('Started on :3100'));