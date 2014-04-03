var templates = new Object();

$.get('templates/welcomeTemplate.html',function(incomingTemplate){
		templates.welcomeTemplate = incomingTemplate;
	}
);