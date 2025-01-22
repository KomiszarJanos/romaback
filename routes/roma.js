const express = require ('express');
const router = express.Router();
const roma = require('../models/roma');

//get all
router.get('/roma', async(req, res)=>
{
    try {roma.find().then(romas=>{console.log(romas);
        res.status(200).json(
            {   msg:"Here are the data",
                romas:romas}) }

       );
           
    } catch (error) {console.log(error); 
        res.status(500).json({msg:"unable to get data"});
        
    }
}

)
module.exports=router;