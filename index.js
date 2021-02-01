var express = require('express');
var app = express ();
// Appel du module router person.js
// recuperation des routes déclarées

var person= require('./routes/person');
var adresse=require('./routes/adresse');

var bodyParser=require('body-parser')

// Declaration de vues embedded javascript(EJS)
app.set("engine_view", "ejs");

// Utilise Body-parser pour pouvoir lire les entrées d'un formulaire
// le stocker comme un objet javascirpt accessible via req.body
app.use(bodyParser.urlencoded({extended : false}))

// app.get("/forms",(req,res)=>{
//     res.render('forms.ejs')
//     })
// app.post("/",(req,res)=>{
// res.render('presentation.ejs',{
//     prenom :req.body.prenom,
//     nom: req.body.nom
// })
// })

var table = [];
app.get("/commentaire",(req,res)=>{
    res.render('commentaire.ejs',{
        table 
    })
    })


app.post("/result",(req,res)=>{
    var contenu = {
        nom : req.body.nom,
        com : req.body.com,
        date : new Date(Date.now())
    }
    table.push(contenu)
res.render('commentaire.ejs',{
    table 


   
})

})



// Appel des routes déclarées dans person.js à partir de la route /person
//http://localhost:8080/person/add
//http://localhost:8080/person/edit
//http://localhost:8080/person/delete
//http://localhost:8080/person/search
app.use('/person',person);
app.use('/adresse',adresse)
// app.get('/', (req,res)=>{
//     res.send("hello world");
// });
// app.listen(8080);


// Un middleware est essentiellement une fonction qui recevra les objets Request et Response 
// et comme 3eme argument , une autre fonction next() que l'on appelera une fois notre code middleware terminé
// var express = require('express');
// var app = express();
// var middleWare = function (req, res, next) {
//     console.log("middleWare:", req.url);
//     next();
// };
// var middleWare2 = function (req, res, next) {
//     console.log("middleWare2:", req.url);
// };
// app.get('/', (req, res, next) => {
//     console.log("requete recu");
//     res.send('hello world');
//     next();
// }, middleWare, middleWare2
// );

// var myLogger = function(req,res,next){
// console.log("Vous etes connecté");
// next();

// }
// var requestTime = function(req,res,next){
//   req.requestTime= Date.now();
//     next();
// }
// app.use(myLogger);
// app.use(requestTime);


// app.get('/',(req,res)=> {
//     var responseText = "Hello world";
//     responseText += "appelé à: " + req.requestTime ;
//     res.send(responseText);
// })
// Routage : interception d'une requete client, via la methode HTTP get()
// puis , redirection vers un composant capable de retourner une response
// "/" est la route

// app.get('/', function(req,res){
//     // instruction qui nous permet de retourner une reponse client
//     res.send("Get request to the home page")
// })
// app.post('/', function(req,res){
//     res.send("Post request to the home page")
// })

// // Precision d'une chaine apres notre route '/' = localhost8080/personne
// app.get('/personne', function(req,res){
   
//     res.send("Bonjour personne")
// })



app.listen(8080, function () {
    console.log("Express en attente");
})
