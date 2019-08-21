
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const folderToServe = process.argv.slice(-1)[0];
console.log('folderToServe', folderToServe);

app.use('/', express.static(folderToServe));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server - port: ${port}`));
