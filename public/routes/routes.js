var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'welcomeRoute',
        'welcome': 'welcomeRoute',
        'home': 'homeRoute',
        'contactMe': 'contactMe',
        'resume': 'resume',
        'projects': 'projects'
    },
    welcomeRoute: function () {
        console.log('test');
        welcome.render();
    },
    homeRoute: function () {
        /*if ($('#right-panel').html() == '') {
            rightPanel.render();
        }*/

        home.render();
    },
    contactMe: function () {
        /*if ($('#right-panel').html() == '') {
            rightPanel.render();
        }*/
        contactMe.render();
    },
    resume: function () {
        resume.render();
    },
    projects: function () {
        projects.render();
    }
});

var app_router = new AppRouter();