const express = require('express');
const port = 1111;
const path = require('path');
const app = express();

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const tabelMiddleware = (req, res, next) => {
    if (req.query.name >= 'test') {
        next();
    } else {
        return res.redirect('/');
    }
}
const chartMiddleware= (req, res, next) => {
    if (req.query.pass >= 'test') {
        next();
    } else {
        return res.redirect('/');
    }
}

// app.use(validate);       // application level




app.get('/', (req, res) => {
    return res.render('index');
})
app.get('/chart', chartMiddleware, (req, res) => {
    return res.render('chart');
})
app.get('/tabel', tabelMiddleware, (req, res) => {
    return res.render('tabel');
})

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
})
