const express = require('express');
const compression = require('compression');
const path = require('path');
const PORT = process.env.PORT || 8081;

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, '../front-end/dist/front-end/')));

app.get('/*', function(req, res) {
  console.log(Date.now());
  res.sendFile(path.join(__dirname, '../front-end/dist/front-end/index.html'));
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
