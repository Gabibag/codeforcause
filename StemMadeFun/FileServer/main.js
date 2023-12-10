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
app.get('/Books/:Name', (req, res) => {
    let files = fs.readdirSync('./Data/');
    let name = req.params.Name;
    let found = false;
    files.forEach(file => {
        if(file.split(".")[1] != "pdf") return;
        let a = file.split(".")[0].split('-');
        if(a[0] == name && !found) {
            res.sendFile(__dirname + '/Data/' + file);
            found = true;
            return;
        }
    });
    if(!found) res.send('404');
});

app.get('/books/', (req, res) => {
    //read all books in the data directory
    let data = []
    let files = fs.readdirSync('./Data/');
    files.forEach(file => {
        if(file.split(".")[1] != "pdf") return;
        let a = file.split(".")[0].split('-');
        let o = {
            title: a[0],
            author: a[1],
            pages: a[2],
        }
        data.push(o);
    });
    console.log(data);
    res.json(data);
    });
app.get('/File/:Name', (req, res) => {
    res.sendFile(__dirname + '/Data/' + req.params.Name);
});
app.get('/File/Image/:Name', (req, res) => {
    res.sendFile(__dirname + '/Data/Image/' + req.params.Name);
}); 
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});