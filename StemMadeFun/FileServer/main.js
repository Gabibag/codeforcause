const app = require('express')();
const cors = require('cors');
app.use(cors());
const PORT = 2525;
app.get('/', (req, res) => {
    res.send('TEST run');
});
app.get('/File/:Name', (req, res) => {
    res.sendFile(__dirname + '/Data/' + req.params.Name);
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});