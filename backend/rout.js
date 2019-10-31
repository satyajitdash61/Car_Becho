const express = require('express');
const router = express.Router();
const Car=require("./Model/CarModel");
const Upload =require("./Model/Uploading");

    router.post("/", (req, res) => {
      // console.log("hello")
        // console.log(req.body);
        // console.log(req.body.Username);
        const note= req.body;
        const newUpload = new Upload({
          username:note.Username,
          mobile:note.Mobile,
          city:note.City,
          pin:note.Pin,
          car:note.Car,
          modelyear:note.ModelYear,
          kms:note.Kms,
          insurance:note.Insurance,
          owners:note.Woners
        })

        newUpload.save()
                 .then(user =>
                  {
                    if(!user)
                    return res.status(404).json({"error":"user notstored"})
                    console.log(user);
                    res.status(200).json({"success":"user stored successfully"})
                  })
                  .catch(err => console.log(err)); 
    });
    router.get("/allcars", (req, res) => {
        Upload.find({})
              .then((cars)=>{if(!cars)
               return res.status(404).json({"error":"no data to show"});
               console.log(cars);
               res.status(200).json(cars)
          });          
    });
    router.get("/calculation/:b",(req,res) =>{
       let c = JSON.parse(req.params.b);
      //  Car.findOne({car:c.Car})
      //  .then(car =>{
         console.log(c);
      //  })
    })
 

    module.exports = router;
 

