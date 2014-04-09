var AppRouter = Backbone.Router.extend({
	routes: {
		'':				'welcomeRoute',
		'welcome':		'welcomeRoute',
        'home':         'homeRoute',
        '*var':         'notFoundRoute'
	}
});

var app_router = new AppRouter;

app_router.on('route:welcomeRoute', function(){
	welcome.render();
})

app_router.on('route:homeRoute', function(){
	home.render();
})