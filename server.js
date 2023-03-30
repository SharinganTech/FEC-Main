const path = require('path');
const express = require('express'); // npm installed
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, '/dist')));

// other configuration...

app.listen(3000);
console.log('listening on port');
