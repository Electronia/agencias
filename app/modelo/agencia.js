var mongoose = require('mongoose');

module.exports = mongoose.model('Agencia', {
	nombre: String,
	appUrlId: String,
	email: String,
	phone: String,
	custId: String,
});
