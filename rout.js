module.exports = (app, col) => {
    app.post("/", (req, res) => {
        // console.log(req.body);
        // console.log(req.body.Username);
        const note= req.body;
        col.insertOne(note, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
          });
    //    res.status(200).send('one do');
    // });
    // app.get("/api", (req, res) => {
    //     col.findOne({test_id: 1}, function(err, document) {
    //         console.log(document)
    //         res.send(document);
    //       });
    });
 }