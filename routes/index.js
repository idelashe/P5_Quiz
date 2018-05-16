var express = require('express');
var router = express.Router();
var Sequelize= require("sequelize");
// Importar el modelo
const {models} = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Pagina de creditos
router.get('/credits', function(req, res, next) {
    res.render('credits');
});

// Pagina de quizzes
router.get('/quizzes', function(req, res, next) {
	models.quiz.findAll()
	        .then(quizzes =>{
	        var list=JSON.stringify(quizzes);
	    res.render('quizzes',{title: 'Lista de Quizzes',quizList:list}); //Exportamos la lista con los quiz al render.
	})
	.catch(error =>{
	        console.log(error);
	})
});

module.exports = router;