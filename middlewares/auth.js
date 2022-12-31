module.exports = (req, res, next) => {
  // user not logged in
  if (!req.session.user) res.redirect("/logar");
  // user has a session
  next();
};
