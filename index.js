const express = require('express');
const app = express();
const path = require('path');

app.set('port', 7070);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'));
