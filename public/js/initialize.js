var welcome = new WelcomeView();
var home = new HomeView();
var header = new HeaderView();
var contactMe = new ContactMeView();
var resume = new ResumeView();
var projects = new ProjectView();
$(document).ready(function () {
    // Start Backbone history
    Backbone.history.start();
});