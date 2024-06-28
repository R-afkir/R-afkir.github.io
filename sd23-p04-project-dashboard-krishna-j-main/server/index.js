            
import express from 'express';

const app = express();
const port = 3000;

//deze regel code zorgt ervoor dat er vanuit de 'public' map statische content kan worden geserveerd
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

