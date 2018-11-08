// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	} 
	console.log('Connected to MongoDB server')
	const db = client.db('TodoApp')

	// delete many 
	
	// db.collection('Todos').deleteMany({ text: 'make another commit' })
	// 	.then( res => console.log(res))
	
	// delete one
	
	// db.collection('Todos').deleteOne({ text: 'brush teef' })
	// 	.then( res => console.log(res))
	
	//find one and delete

	// db.collection('Todos').findOneAndDelete({ completed: false })
	// 	.then( doc => console.log(doc))

	// db.collection('Users').deleteMany({ name: 'Jess' })
	// 	.then( res => console.log(res))

	db.collection('Users').findOneAndDelete({ _id: new ObjectID('5be39ab90659effe805a4bd7') })
		.then( res => console.log(res))

	client.close()
})
