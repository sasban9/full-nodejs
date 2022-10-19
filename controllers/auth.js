const User = require('../models/user')

exports.getLogin = (req, res, next) => {
//   const isLoggedIn = req.get("Cookie").split(";")[1].trim().split("=")[1] === 'true';
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
    //   res.setHeader("Set-Cookie", "loggedIn=true");
    User.findById("634ef2f1e1db969f520e401d")
      .then((user) => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save(err => {
          console.log(err);
          res.redirect("/");
        })
      })
      .catch((err) => console.log(err));
  };

  exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/login');
        console.log(err);
    });
  };
    