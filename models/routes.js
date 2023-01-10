const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://cesierra:Sierra-Mongo@cluster0.lcj6yle.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
},
(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./routes.model');