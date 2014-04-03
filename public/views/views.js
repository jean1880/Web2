var WelcomeView = Backbone.Model.extend({
	el: '#body',
	events: {
		'click #logo-wrap': 'navHome'
	},
	render: function(){
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
	},
	navHome: function(){
		console.log('test');
		$('#logo-wrap').prepend(Handlebars.compile(templates.pulseEffectTemplate));
	}
});