const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('', (req, res) => {
    res.send(`KaraokeRoom rocks and this API is working great!`);
})

app.post('', (req, res) => {
    console.log(req.body);
    let response = '';
    let status = 400;
    const { name, date, from, to } = req.body;

    if (!name) {
        response = `The parameter name is missing`;
    } else if (!date) {
        response = `The parameter date is missing`;
    } else if (!from) {
        response = `The parameter from is missing`;
    } else if (!to) {
        response = `The parameter to is missing`;
    }else {
        status = 200;
        response = `Your appointment has been scheduled successfully`
    }

    res.statusCode= status;
    res.send(response);
})

app.listen(port, () => console.log(`KaraokeRoom running on ${port}!`));

