const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
app.use(express.static(__dirname + '/'));
const cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json ({
	extended: true,
	limit: "50mb"
}));
const cardRouter = require("./routes/cardRoutes");
const userRouter = require("./routes/userRoutes");
// app.post("/user/signup", function(req,res){
// 	console.log(req.body.name)
// });

app.use(cookieParser());
app.use("/api/board/card", cardRouter);
app.use("/api/user", userRouter);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.post("/api/board/card/save",controller.saveCard);
app.listen(9000, function(){
    console.log("server started 9000");
})
    
