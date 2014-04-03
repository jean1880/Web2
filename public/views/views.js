var WelcomeView = Backbone.Model.extend({
	el: '#body',
	events: {
	},
	render: function(){
		console.log(templates.welcomeTemplate);
		if(templates.welcomeTemplate != undefined){
			$(this.el).html(Handlebars.compile(templates.welcomeTemplate));
		}
		else{
			var that = this;
			$.get('templates/welcomeTemplate.html',function(incomingTemplate){
					$(that.el).html(Handlebars.compile(incomingTemplate));
					$('#center').css('height', $(window).innerHeight());
					$(window).resize(function(){
						$('#center').css('height', $(window).innerHeight())
					});
				}
			);
		}
	}
});