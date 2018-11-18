const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('../server/models/Todo')
const { User } = require('../server/models/User')

// const id = '5bef1ddd9e7972b43fe7b2be'

// if ( !ObjectID.isValid(id) ) console.log("ID not valid");

// Todo.find({
// 	_id: id
// }).then( (todos) => {
// 	console.log('Todos', todos)
// })

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo)
// })

// Todo.findById(id).then( (todo) => {
// 	console.log('Todo', todo);
// })
// .catch( (e) => console.log('ID not found'))

const userId = '5bef074eafc06eae97812ef8'

User.findById(userId).then( (user) => {
	console.log(JSON.stringify(user, undefined, 2) )
})
.catch( (e) => {
	console.log('Unable to find user')
	console.log(e)
})