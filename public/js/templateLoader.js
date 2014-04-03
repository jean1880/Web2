var templates = new Object();

$.get('templates/welcomeTemplate.html',function(incomingTemplate){
		templates.welcomeTemplate = incomingTemplate;
	}
);

$.get('templates/pulseEffectTemplate.html',function(incomingTemplate){
		templates.pulseEffectTemplate = incomingTemplate;
	}
);