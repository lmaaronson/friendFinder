// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

//when user goes to the root, send then the home page
app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "../public/home.html"))
})

//when the user goes to the /survey, go to the survey page
app.get("/survey", function(request, response){
    response.sendFile(path.join(__dirname, "../public/survey.html"))
})


  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
