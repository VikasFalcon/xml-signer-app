const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { xmlSigner } = require('./xml-signer');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/sign-xml', (req, res) => {
    const { xmlData, apiName, signatureLocation, certificate } = req.body;
    try {
        const signedXml = xmlSigner(xmlData, apiName, signatureLocation, certificate);
        res.json({ signedXml });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index,html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
