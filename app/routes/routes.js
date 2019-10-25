module.exports = (app, db) => {
    app.get("/Carprice", (req, res) => {
            db.collection("CarInfo").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.status(200).send(result);
            // console.log(result);
            });
    })
}