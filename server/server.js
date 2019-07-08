const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require("./routes/api/users");
const path = require('path');
const morgan = require("morgan");

app.use(morgan("tiny"));

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
    .connect(
        process.env.MONGODB_URI || db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

//Serve Static Assets if in Production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('../client/build'));
    app.get('*', (req, res) => {
        // res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
        res.sendFile(path.join(__dirname + "../client/build/index.html"));
    });
}

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));