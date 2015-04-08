var Agencia = require('./modelo/agencia');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todos los Personas
	app.get('/api/agencia', Controller.getAgencia);
	// Crear una nueva Persona
	app.post('/api/agencia', Controller.setAgencia);
	// Modificar los datos de una Persona
	app.put('/api/agencia/:agencia_id', Controller.updateAgencia);
	// Borrar una Persona
	app.delete('/api/agencia/:agencia_id', Controller.removeAgencia);
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};