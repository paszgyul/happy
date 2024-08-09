require("dotenv").config()
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
let User  = require('./model/User.js')
const { MONGO_URL, BACKEND_PORT } = process.env;
const app = express();

// Connect to MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(BACKEND_PORT, () => {
  console.log(`App is listening to port: ${BACKEND_PORT}`);
});

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Root route
app.route("/")
  .get((req, res) => {
    res.send("Hello world");
  })
  .post((req, res) => {
    res.send("Root POST request");
  })
  .put((req, res) => {
    res.send("Root PUT request");
  })
  .delete((req, res) => {
    res.send("Root DELETE request");
  });

// User route
app.route("/user")
  .get((req, res) => {
    res.send("User");
  })
  .post(async (req, res) => {
    try {
      const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });

      const savedUser = await user.save();
      res.json(savedUser);

    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  })
  .put((req, res) => {
    res.send("User updated");
  })
  .delete((req, res) => {
    res.send("User deleted");
  });

// People route
app.route("/people")
  .get((req, res) => {
    res.send("People");
  })
  .post(async (req, res) => {
    try {
      const user = new User({
        name: req.body.name,
        title: req.body.title,
        short_title: req.body.short_title,
        email: req.body.email,
        bio: req.body.bio,
        image: req.body.image,
        sector: req.body.sector,
        quote: req.body.quote,
        social: req.body.social,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });

      const savedPeople = await people.save();
      res.json(savedPeople);

    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  })
  .put((req, res) => {
    res.send("People updated");
  })
  .delete((req, res) => {
    res.send("People deleted");
  });

// Quote route
app.route("/quote")
  .get((req, res) => {
    res.send("Quote");
  })
  .post((req, res) => {
    try {
      const user = new User({
        title: req.body.title,
        quote: req.body.quote,
        name: req.body.name,
        company: req.body.company,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });

      const savedQuote = await quote.save();
      res.json(savedQuote);

    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  })
  .put((req, res) => {
    res.send("Quote updated");
  })
  .delete((req, res) => {
    res.send("Quote deleted");
  });

// Company route
app.route("/company")
  .get((req, res) => {
    res.send("Company");
  })
  .post((req, res) => {
    try {
      const user = new User({
        title: req.body.title,
        sector: req.body.sector,
        location: req.body.location,
        status req.body.status,
        num_of_people req.body.num_of_people,
        website: req.body.website,
        social: req.body.social,
        black_logo: req.body.black_logo,
        white_logo: req.body.white_logo,
        quote: req.body.quote,
        ceo_name: req.body.ceo_name,
        ceo_title: req.body.ceo_title,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });

      const savedQuote = await quote.save();
      res.json(savedQuote);

    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  })
  .put((req, res) => {
    res.send("Company updated");
  })
  .delete((req, res) => {
    res.send("Company deleted");
  });


// app.post('/api/data', (req, res) => {
//   console.log("asdf");
//   res.send('Welcome to the backend!');

//   // const title = req.body.title;
//   // const author = req.body.author;
//   // const genre = req.body.genre
//   // const createdAt = Date.now();
//   // const updatedAt = Date.now();

//   // const book = new Book({
//   //     title,
//   //     author,
//   //     genre,
//   //     createdAt,
//   //     updatedAt
//   //   });
//   //   book.save()
//   //     .then(book => res.json(book))
//   //     .catch(err => res.status(400).json({ success: false }));


//   // console.log(req.body)
// });





// app.use(cors());
// app.use(express.json());

// app.get('/api', (req, res) => {
//   res.send('Hello from the backend!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
