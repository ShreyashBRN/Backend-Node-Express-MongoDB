const Home = require("../models/home.cjs")

exports.getAddHome = (req, res, next) => {
  res.render('addHome', {
    pageTitle: 'Add Home to airbnb', currentPage: 'addhome'
});
};


exports.postAddHome = (req, res, next) => {
  const {houseName, price, location, rating, photoUrl} = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render('homeAdded', {
    pageTitle: 'Home Added Successfully',
    currentPage: "homeAdded"
});
}

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll();
  console.log(registeredHomes);
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home'
  });
}

// exports.registeredHomes = registeredHomes;