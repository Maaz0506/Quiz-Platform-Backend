const express  = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();

const corsOptions = {
    origin: "https://localhost:8081"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));


app.get('/', (req, res) => {
    res.json('hello from api')
})

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})

