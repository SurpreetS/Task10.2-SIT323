
'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Task 10.2 \n\n\nHi! i am surpreet singh. I am a final year student of bachelor of IT(majoring in cloud computing) at Deakin University.I am doing SIT323 which is one of my major units and I am aiming for HD.');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});