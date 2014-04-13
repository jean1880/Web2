var AppRouter = Backbone.Router.extend({
	routes: {
		'':				'welcomeRoute',
		'welcome':		'welcomeRoute',
        'home':         'homeRoute',
        'contactMe':    'contactMe',
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

app_router.on('route:contactMe', function(){
	contactMe.render();
})