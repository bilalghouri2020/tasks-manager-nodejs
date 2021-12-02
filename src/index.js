// import npm modules
const express = require('express')
require('./db/mongoose')

// import routers
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
    // Site Middleware for Emergency
    console.log(req.method, req.path);
    next()
})

// use body parser
app.use(express.json())

// use body 
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {

//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password);
//     console.log(hashedPassword);

//     const isMatch = await bcrypt.compare(password, hashedPassword)
//     console.log(isMatch);

// }

// myFunction()