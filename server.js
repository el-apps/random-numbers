// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const nextNumber = generateRandomNumber();
    res.send(`<h1>Hello World</h1><p><a href="/numbers/${nextNumber}">Next</a></p>`);
});

app.get('/numbers/:number', (req, res) => {
    const nextNumber = generateRandomNumber();
    res.send(`<h1>${req.params.number}</h1><p><a href="/numbers/${nextNumber}">Next</a></p>`);
})

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
