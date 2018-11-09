// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	} 
	console.log('Connected to MongoDB server')
	const db = client.db('TodoApp')

	//Find one and update

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5be3992a0659effe805a4b73')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then( res => console.log(res))
	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5be32648ef08ba0994c164d3')
	}, {
		$set: {
			name: 'jo boi'
		},
			$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then(res => console.log(res))

	client.close()
})
