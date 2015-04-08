angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newPersona = {};
	$scope.agencias = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/agencia').success(function(data) {
		$scope.agencias = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a una persona
	$scope.registrarAgencia = function() {
		$http.post('/api/agencia', $scope.newAgencia)
		.success(function(data) {
				$scope.newAgencia = {}; // Borramos los datos del formulario
				$scope.agencias = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una persona
	$scope.modificarAgencia = function(newAgencia) {
		$http.put('/api/agencia/' + $scope.newAgencia._id, $scope.newAgencia)
		.success(function(data) {
				$scope.newAgencia = {}; // Borramos los datos del formulario
				$scope.agencias = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.borrarAgencia = function(newAgencia) {
		$http.delete('/api/agencia/' + $scope.newAgencia._id)
		.success(function(data) {
			$scope.newAgencia = {};
			$scope.agencias = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectAgencia = function(agencia) {
		$scope.newAgencia = agencia;
		$scope.selected = true;
		console.log($scope.newAgencia, $scope.selected);
	};
}

function listController($scope, $http) {
	$scope.nombreAgencia = 'Agencia Test';
	$scope.Items;
	$scope.seller;
	$scope.cust_id = '170455737';
	$scope.nickname  ='';
	$scope.listado_dos = false;
	$scope.listado_uno = true;

	// Obtenemos todos los items de la api de search_backend

	$http.get('https://api.mercadolibre.com/sites/MLM/search?category=MLM1743&seller_id='+$scope.cust_id).success(function(data) {
		
		$scope.Items = data.results;
		$scope.seller = data.seller;
		
	
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	$scope.loadListItems = function(){

	$http.get('https://api.mercadolibre.com/sites/MLM/search?category=MLM1743&seller_id='+$scope.cust_id).success(function(data) {
		
		$scope.Items = data.results;
		$scope.seller = data.seller;
		
	
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	};

	$scope.getSeller = function(){

		
		$http.get('https://api.mercadolibre.com/users/'+$scope.cust_id).success(function(data) {
		
		$scope.nickname = data.nickname;
		
		})
		.error(function(data) {
		
		});
	};

	$scope.searchAttribute = function(attrs, attrId){

		var attrValue = 'N/D';

		for (var i=0; i<attrs.length; i++){
			if( attrs[i].id.indexOf(attrId) > 0){
				attrValue = attrs[i].value_name;
			}
		}

		return attrValue;

	};

	$scope.changeView = function (mode){

		if(mode == 1){

			$scope.listado_uno = false;
			$scope.listado_dos =  true;

		}

		if(mode == 2){

			$scope.listado_uno = true;
			$scope.listado_dos = false;
		}
	};




}