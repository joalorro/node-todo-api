const expect = require('expect')
const request = require('supertest')

const { app } = require('../server')
const { Todo } = require('../models/Todo')

// allows us to run some code before tests run

const todos = [ {
	"text": 'first test todo'
}, {
	"text": "second test todo"
}]

beforeEach( (done) => {
	// destroys all todos
	Todo.remove( {} ).then( () => {
		return Todo.insertMany(todos)
	}).then( () => done() )
})

describe('GET /todos', () => {
	it('it should return all todos', (done) => {
		request(app)
		.get('/todos')
		.expect(200)
		.expect( (res) => {
			expect(res.body.todos.length).toBe(2)
		})
		.end(done)
	})
})

describe('POST /todos', () => {
	it('should create a new todo', (done) => {
		const text = 'Test todo text'

		request(app)
			.post('/todos')
			.send({ text })
			.expect(201)
			.expect( (res) => {
				expect(res.body.text).toBe(text)
			})
			.end( (err, res) => {
				if (err) return done(err)

				Todo.find({text}).then( (todos) => {
					expect(todos.length).toBe(1)
					expect(todos[0].text).toBe(text)

					done()
				}).catch( (err) => done(err))
			} )
		
	})

	it('should not create todo with invalid body data', (done) => {
		request(app)
		.post('/todos')
		.send({})
	.end( (err,res) => {
			if (err) return done(err)

			Todo.find().then( (todos) => {
				expect(todos.length).toBe(2)

				done()
			}).catch( (err) => done(err))
		})
	})
})