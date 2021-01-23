const dbName = "students", dbPort = 27017, dbHost = "localhost"

const connectToDB = () => {
    //Import the mongoose module
    var mongoose = require('mongoose');
    
    //Set up default mongoose connection
    var mongoDB = `mongodb://${dbHost}:${dbPort}/${dbName}`;
    mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to mongodb: " + mongoDB)
    });
    
    //Get the default connection
    var db = mongoose.connection;
    
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = {
    connectToDB
}