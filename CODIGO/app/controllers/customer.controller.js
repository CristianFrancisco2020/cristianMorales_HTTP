var customers = {
				customer1: {
					firstname: "Jack",
					lastname: "Davis",
					age: 25,
					actividad: "lavar platos",
					id: 1
				},
				customer2: {
					firstname: "Mary",
					lastname: "Taylor",
					age: 37,
					actividad: "cocinar",
					id: 2
				},
				customer3: {
					firstname: "Peter",
					lastname: "Thomas",
					actividad: "Ir al super",
					age: 17,
					id: 3
				},
				customer4: {
					firstname: "Peter",
					lastname: "Thomas",
					actividad: "planchar",
					age: 17,
					id: 4
				}
			}

exports.create = function(req, res) {
	var newCustomer = req.body;
    customers["customer" + newCustomer.id] = newCustomer;
	console.log("--->After PostNuevo registro:\n" + JSON.stringify(customers, null, 5));
    res.end("Nuevo registro: \n" + JSON.stringify(newCustomer, null, 5));
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(customers, null, 5));
    res.end("Todos los clientes: \n" + JSON.stringify(customers, null, 5));  
};

exports.findOne = function(req, res) {
    var customer = customers["customer" + req.params.id];
    console.log("--->Find customer: \n" + JSON.stringify(customer, null, 5));
    res.end( "Buscar un cliente:\n" + JSON.stringify(customer, null, 5));
};

exports.update = function(req, res) {
	var id = parseInt(req.params.id);
	var updatedCustomer = req.body; 
	if(customers["customer" + id] != null){
		// update data
		customers["customer" + id] = updatedCustomer;

		console.log("--->Update cliente: \n" + JSON.stringify(customers, null, 5))
		
		// return
		res.end("Update exitosa \n" + JSON.stringify(updatedCustomer, null, 5));
	}else{
		res.end("No existe el cliente:\n:" + JSON.stringify(updatedCustomer, null, 5));
	}
};

exports.delete = function(req, res) {
	var deleteCustomer = customers["customer" + req.params.id];
    delete customers["customer" + req.params.id];
    console.log("--- despues de la eliminacion:\n" + JSON.stringify(customers, null, 5) );
    res.end( "cliente eliminado: \n" + JSON.stringify(deleteCustomer, null,5));
};