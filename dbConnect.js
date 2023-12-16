const mongoose = require('mongoose')
const URL = 'mongodb+srv://sarah:mahirakhan.1000@atlascluster.b2dqead.mongodb.net/Resume-Builder'
mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Mongo DB Connection Successful')
})
connection.on('error', (error) => {
    console.log(error)
})