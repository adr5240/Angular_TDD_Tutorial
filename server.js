let express = require('express');
let cors = require('cors');

let app = express();
app.use(cors());

let contacts = [
    { name:"Eddard" },
    { name:"Robert" }
];

app.get('/contacts', function(req, res) {
    res.status(200).json(contacts);
});

app.listen(9001);
