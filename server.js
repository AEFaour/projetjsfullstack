let app = require('express')();
let mysql = require('mysql');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

let db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'dorancoformation',
    port: 3306
});
/*
db.connect(function(err, connection){
    if(err) throw err;
});*/

app.get('/', function (req,res) {
    //res.send('Hello, serveur démarré')
    res.sendFile(__dirname + '/index.html');
});

app.get('/test', function (req,res) {
    res.send('Ceci est un test')

});

app.get('/client', function (req,res) {
    res.sendFile(__dirname + '/client.js');

});

app.get('/general', function (req, res) {
    //res.send('Requete reçu');
    db.connect(function (err, connection) {

        db.query("SELECT * FROM stagiaires", function (err, sqlreponse) {
            if (err) {
                throw  err;
            } else {
                res.send(sqlreponse);
            }
        });

    });
});

let lang = ['javascript',  'typescript', 'java', 'CSharp', 'CPlusPlus', 'Phyton', 'PHP'];
lang.map((item) => {
    app.get(`/${item}`, function (req, res) {
        db.connect(function (err, connection) {

            db.query("SELECT * FROM stagiaires WHERE formation = ?", [item], function (err, sqlreponse) {
                if (err) {
                    throw  err;
                } else {
                    res.send(sqlreponse);
                }
            });

        });

    });
});



app.listen(1350);
console.log('Le serveur est lancé sur l\'adresse http://127.0.0.1:1350');
