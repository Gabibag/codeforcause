const app = require('express')();
const cors = require('cors');
const json = require('express-json');
const fs = require('fs');

app.use(json());
app.use(cors());
const PORT = 2525;
app.get('/', (req, res) => {
    res.send('TEST run');
});
app.get('/books/', (req, res) => {
    //read all books in the data directory
    let data = []
    fs.readdir(__dirname + '/Data/', (err, files) => {
        if (err) {
            res.send(err);
        }
        console.log(files);
    });
})
app.get('/File/:Name', (req, res) => {
    res.sendFile(__dirname + '/Data/' + req.params.Name);
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});