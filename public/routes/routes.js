var AppRouter = Backbone.Router.extend({
	routes: {
		'':				'welcomeRoute',
		'welcome':		'welcomeRoute'	
	}
});

var app_router = new AppRouter;

app_router.on('route:welcomeRoute', function(){
	welcome.render();
})

