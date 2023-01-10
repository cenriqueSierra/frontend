const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cesierra:<password>@cluster0.lcj6yle.mongodb.net/?retryWrites=true&w=majority', {
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