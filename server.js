
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const lab = process.argv.find(arg => arg.toLowerCase().includes('lab:'));
let labToRun = '01-hello-world';
if (lab){
    labToRun = lab.replace('lab:', '');
}


console.log('labToRun', labToRun);
app.use('/', express.static(`lab/${labToRun}`));

// app.get('/', (req, res) => res.send('Server Online'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`dx server - port: ${port} - ${process.env.NODE_ENV || 'local'} environment`));
