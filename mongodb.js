//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID()
console.log(ObjectID("61a09599031d6815d41817ed").getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }


    const db = client.db(databaseName)

    db.collection('users').deleteOne({
        age: 28
    }).then((result) => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })

    // const boolPromise = db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // })

    // boolPromise.then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // })


    // const dbPromise = db.collection('users').updateOne({
    //     _id: new ObjectID('61a08dc871dc81319c9fa075')
    // }, {
    //     $set: {
    //         name: 'muhammad bilal ghouri'
    //     }
    // })

    // dbPromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').insertOne({
    //     name: 'Bilal',
    //     age: 28,
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'bilal',
    //         age: 28
    //     },
    //     {
    //         name: 'usama',
    //         age: 19
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false,
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    // })


















    console.log('Connected correctly!');

});
