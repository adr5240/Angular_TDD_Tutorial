let express = require('express');

let app = express();

let contacts = [
    { name:"Eddard" },
    { name:"Robert" }
];

app.get('/contacts', function(req, res) {
    res.status(200).json(contacts);
});

app.listen(9000);
