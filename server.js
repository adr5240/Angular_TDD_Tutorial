let express = require('express');
let cors = require('cors');

let app = express();
app.use(cors());

let contacts = [
        {
            "name": "Shotaro Kaneda",
            "age": 16,
            "occupation": "Futuristic Biker Gang Captain",
            "email": "kaneda@capsules.co.jp"
        }, {
            "name": "Jon Snow",
            "age": 15,
            "occupation": "Lord Commander of the Night's Watch",
            "email": "jon@nightswatch.wl"
        }, {
            "name": "Lara Croft",
            "age": 22,
            "occupation": "Tomb Raider",
            "email": "lara@croft.co.uk"
        }, {
            "name": "Bob the Builder",
            "age": 30,
            "occupation": "The Builder",
            "email": "bob@builder.the"
        }
];

app.get('/contacts', function(req, res) {
    res.status(200).json(contacts);
});

app.listen(9001);
