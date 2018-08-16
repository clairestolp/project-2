var authController = require("../controllers/authController.js");
var remainingRoutes = require("./remainingRoutes");
var plannedRoutes = require("./plannedRoutes");
var spentRoutes = require("./spentRoutes");

module.exports = function(app, passport) {
  app.get("/signup", authController.signup);

  app.get("/signin", authController.signin);

  app.get("/user/planned", isLoggedIn, plannedRoutes.getUserPlanned);

  app.get("/user/spent", isLoggedIn, spentRoutes.getUserSpent);

  app.get("/user/remaining", isLoggedIn, remainingRoutes.getUserRemaining);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/user/planned",
      failureRedirect: "/"
    })
  );

  app.get("/logout", authController.logout);

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/user/planned",
      failureRedirect: "/"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect("/");
  }
};
