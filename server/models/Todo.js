const mongoose = require('mongoose')
mongoose.set('debug', true)

const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true

	},
	completed: {
		type: Boolean,
		default: false,
	},
	completedAt: {
		type: Number,
		defaul: null,
	}
}, "Todo")

module.exports = { Todo }