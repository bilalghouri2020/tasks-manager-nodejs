const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
















// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000,
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word Document'))
//         }
//         cb(undefined, true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })
// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send();
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// app.use((req, res, next) => {
//     // Site Middleware for Emergency
//     console.log(req.method, req.path);
//     next()
// })

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('61a9e9601df8f909e0cc4239');
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner);
//     const user = await User.findById('61a9e85be35d2b2cb04902f5')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks);
// }

// main()





// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
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