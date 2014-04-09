var templates           = new Object();

var templateCount       = 4;
var progressMin         = 0;
var progressMax         = 100;
var progressIterator    = Math.floor(progressMax / templateCount);

var progress            = progressMin;

var incrementProgess = function(){
    if (progress < (progressMax - progressIterator - 1)) {
        progress += progressIterator;
    } else {
        progress = progressMax;
    }
    $('.progress-bar').attr('aria-valuenow', progress).css('width', progress+'%');
    if (progress == progressMax) {
        setTimeout(function() {
            $('.progress').addClass('fadeOutDown animated');
        }, 500)
    }
}

$.get('templates/welcomeTemplate.html', function(incomingTemplate) {
    templates.welcomeTemplate = incomingTemplate;
    incrementProgess();
});

$.get('templates/pulseEffectTemplate.html', function(incomingTemplate) {
    templates.pulseEffectTemplate = incomingTemplate;
    incrementProgess();
});

$.get('templates/homeTemplate.html', function(incomingTemplate) {
    templates.homeTemplate = incomingTemplate;
    incrementProgess();
});

$.get('templates/headerTemplate.html', function(incomingTemplate) {
    templates.headerTemplate = incomingTemplate;
    incrementProgess();
});