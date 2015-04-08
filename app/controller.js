var Agencia = require('./modelo/agencia');

// Obtiene todos los objetos Agencia de la base de datos
exports.getAgencia = function (req, res){
	Agencia.find(
		function(err, agencia) {
			if (err)
				res.send(err)
					res.json(agencia); // devuelve todas las Personas en JSON		
				}
			);
}

// Guarda un objeto Agencia en base de datos
exports.setAgencia = function(req, res) {

		// Creo el objeto Agencia
		Agencia.create(
			{nombre : req.body.nombre, appUrlId: req.body.appUrlId, email: req.body.email, phone: req.body.phone, custId: req.body.custId}, 
			function(err, agencia) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las agencias tras crear una de ellas
				Agencia.find(function(err, agencia) {
				 	if (err)
				 		res.send(err)
				 	res.json(agencia);
				});
			});

	}

// Modificamos un objeto Agencia de la base de datos
exports.updateAgencia = function(req, res){
	Agencia.update( {_id : req.params.agencia_id},
					{$set:{nombre : req.body.nombre, appUrlId: req.body.appUrlId, email: req.body.email, phone: req.body.phone, custId: req.body.custId}}, 
					function(err, agencia) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las agencias tras crear una de ellas
				Agencia.find(function(err, agencia) {
				 	if (err)
				 		res.send(err)
				 	res.json(agencia);
				});
			});
	}

// Elimino un objeto Agencia de la base de Datos
exports.removeAgencia = function(req, res) {
	Agencia.remove({_id : req.params.agencia_id}, function(err, agencia) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Agencia.find(function(err, agencia) {
				if (err)
					res.send(err)
				res.json(agencia);
			});
		});
}