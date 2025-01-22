const express= require('express');
const bodyparser= require('body-parser');
const mongoose= require('mongoose');
const cors = require('cors');

const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());


const port = 3000;
app.listen(port, ()=>{console.log(`App is running port: ${port}`);});

const connectDB= async()=>{
    try {await mongoose.connect('mongodb://localhost:27017/roma'); 
    console.log('Database is connected');
        
    } catch (error) { console.log(error); process.exit(1);
        
    }
}
connectDB();
const roma = require ('./routes/roma')
app.use('/api', roma );