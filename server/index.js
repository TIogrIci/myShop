const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDB = require('./fake-db');
const productRoutes = require('./routes/products'); 

const app = express();
const PORT = process.env.PORT | '3001';

// app.get('/products', function(req,res){
//     res.json({'success': true})
// });

app.use('/api/v1/products', productRoutes);

app.listen(PORT, function(){
    console.log('server running');
});



// getting-started.js
mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then (
    ()=> {
        const fakeDB = new FakeDB();
        fakeDB.initDb();
    }
);