const express = require('express')
const bodyParser = require('body-parser')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/Todo')
const { User } = require('./models/User')

const app = express()

// Using middleware
app.use(bodyParser.json())

app.get('/todos', (req,res) => {
	Todo.find().then( (todos) => {
		console.log("GET /todos status OK");
		const formattedData = todos.map( (t) => {
			return {
				_id: t._id,
				text: t.text,
				completed: t.completed,
				completedAt: t.completedAt
			}
		})
		res.send({ todos })
	}, (e) => {
		console.log("ERROR with GET /todos");
		res.status(400).send(e)
	})
})

app.post('/todos', (req,res) => {
	const todo = new Todo({
		text: req.body.text
	})

	todo.save().then( (todo) => {
		console.log('POST /todos status CREATED')
		console.log(todo);
		res.status(201).send(todo)
	}, (e) => {
		console.log('POST /todos status BAD REQUEST')
		console.log(e);
		res.status(400).send(e)
	} )
})

app.post('/users', (req,res) => {
	const user = new User({
		email: req.body.email
	})

	user.save().then( (doc) => {
		console.log('saving user',doc);
		res.status(201).send(doc)
	}, (e) => {
		console.log('unable to save user',e);
		res.status(400).send(e)
	})
})

// Takes in the port number as its first argument

app.listen(3000, () => {
	console.log('Starting on port 3000');
})

module.exports = { app }