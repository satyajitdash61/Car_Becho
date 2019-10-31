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
      
       let {car,Car_Year,Car_km,Car_Insurance,Car_Owner} = JSON.parse(req.params.b);
       Car.findOne({car})
       .then(car =>{
        let Car_Price=JSON.parse(JSON.stringify(car)).price;
        console.log(Car_Price);
        
        if(CarYear==2015){
        price-=price*0.1;
    }
    if(CarYear==2013){
        price-=price*0.12;
    }
    if(CarYear==2010){
        price-=price*0.13;
    }
    if(CarKm==5000){
        price-=price*0.04;
    }
    if(CarKm==10000){
        price-=price*0.06;
    }
    if(CarKm==20000){
        price-=price*0.08;
    }
    if(CarKm==30000){
        price-=price*0.9;
    }
    if(CarInsurance=="no"){
        price-=price*0.4;
    }    
    if(CarWoner==2){
        price-=price*0.2;
    }

       })
      
    })
 

    module.exports = router;
 

