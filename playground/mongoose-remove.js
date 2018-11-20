const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('../server/models/Todo')
const { User } = require('../server/models/User')

// Remove everything 

// Todo.remove({}).then( result => {
// 	console.log(result)
// })

// Find one and remove 
// Todo.findOneAndRemove()

//Find by id and remove 
//Todo.findByIdAndRemove
//returns the doc 
Todo.findByIdAndRemove('5bf3652c4c58adbf9033ff03').then( (todo) => {
	console.log(todo)
})

// performs the same operation but requires a query object
// Todo.findOneAndRemove({ _id: '5bf3652c4c58adbf9033ff03'}).then( todo => {
// 	console.log(todo);
// })