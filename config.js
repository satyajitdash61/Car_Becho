module.exports = (app, db) => {

         app.post("/", (req, res) => {
            //console.log('/')
            console.log(req);
            console.log(req.body.Username);
            console.log(req.body.Password);
            const note= req.body;
            db.collection("user").insertOne(note, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
              });
           // res.status(200).send('one do');
        });
}