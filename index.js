const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, __dirname + "/uploads");
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "_" + file.originalname);
    }
});

const upload = multer({ storage: storage });

//Khai báo middleware

//khai báo static folder
app.use(express.static('./uploads'));

//khai báo thư mục đên các đường dẫn của template
app.set("views", "./views");
app.set("view engine", "pug");

//parsing application/json
app.use(bodyParser.json());

//parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("form");
});

app.post('/', upload.single("avatar"), (req, res) => {
    const { body, file } = req;
    console.log(file);
    res.render("info", { body, file });
});

app.listen(8080);
