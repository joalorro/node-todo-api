// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	} 
	console.log('Connected to MongoDB server')
	const db = client.db('TodoApp')

	// db.collection('Todos').find().count()
	// 	.then((count) => {
	// 		console.log('Todos Count: ' + count)
	// 	}, (err) => {
	// 		console.log('Unable to fetch todos', err)
	// 	})

	db.collection('Users').find({name: 'Jess'}).toArray()
		.then((users) => {
			users.forEach( u => console.log('User:',u))
		}, (err) => {
			console.log('Unable to fetch todos', err)
		})

	client.close()
})
