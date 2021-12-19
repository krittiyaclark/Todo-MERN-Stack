const path = require('path')
require('dotenv').config({
	path: path.resolve(__dirname, `../config/.env.${process.env.NODE_ENV}`),
})

const express = require('express')
const connectDB = require('./db')
const rootRouter = require('./routes')
const todoRoutes = require('./routes/todos')

// Initialize the MongoDB Connection
connectDB()

const { NODE_ENV, PORT } = process.env

const server = express()

// Parse JSON using express
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

// Middleware
const cors = require('cors')
server.use(cors())

server.use('/', rootRouter)
server.use('/todos', todoRoutes)

if (NODE_ENV !== 'development') {
	server.get((req, res) => {
		res.sendFile(path.join(__dirname, '/build/index.html'))
	})

	server.use(express.static('build'))
} else {
	console.log(`Running in development mode. Disabling get from build`)
}

server.listen(PORT || 3000, () => {
	console.log(`Server listening on port ${PORT}.`)
})
