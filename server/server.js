const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/Todo')
const { User } = require('./models/User')

const app = express()

const port = process.env.port || 3000

// Using middleware
app.use(bodyParser.json())

app.get('/todos', (req,res) => {
	Todo.find().then( (todos) => {
		console.log("GET /todos status OK");
		res.send({ todos })
	}, (e) => {
		console.log("ERROR with GET /todos");
		res.status(400).send(e)
	})
})

// GET /todos/:id

app.get('/todos/:id', (req,res) => {
	const id = req.params.id
	
	if (!ObjectID.isValid(id)){
		console.log('Unable to find ID')
		return res.status(404).send({
			status: 404,
			error: 'ID not found'
		})
	} 
	Todo.findById(id).then( (todo) => {
		console.log('GET /todos/' + id)
		if (!todo){
			return res.status(404).send()
		}
		return res.send({ todo })
	}).catch( (e) => {
		console.log('ID not found');
		return res.status(400).send({
			status: 400,
			error: 'ID not found'
		})
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

app.listen(port, () => {
	console.log('Starting on: ' + port);
})

module.exports = { app }