/**
 * Loads all the templates to be used by the MVC
 * @class js.templateLoader.js
 */
var templates = new Object();

var templateCount = 7;
var PROGRESSMIN = 0;
var PROGRESSMAX = 100;
var progressIterator = Math.floor(PROGRESSMAX / templateCount);
var count;

var progress = PROGRESSMIN;

/**
 * Increments progress by, if progresscompletes fade out the progresss bar
 * @method  incrementProgress
 */
var incrementProgress = function () {
    count++;
    if (count == templateCount) {
        progress += progressIterator;
    } else {
        progress = PROGRESSMAX;
    }
    $('.progress-bar').attr('aria-valuenow', progress).css('width', progress + '%');
    if (progress == PROGRESSMAX) {
        setTimeout(function () {
            $('.progress').addClass('fadeOutDown animated');
        }, 500)
    }
};

/**
 * Fetch welcome temmplate and save into template object
 */
$.get('templates/welcomeTemplate.html', function (incomingTemplate) {
    templates.welcomeTemplate = incomingTemplate;
    incrementProgress();
});

/**
 * Fetch welcome temmplate and save into template object
 */
$.get('templates/projectsTemplate.html', function (incomingTemplate) {
    templates.projectsTemplate = incomingTemplate;
    incrementProgress();
});


/**
 * Fetch resume temmplate and save into template object
 */
$.get('templates/resumeTemplate.html', function (incomingTemplate) {
    templates.resumeTemplate = incomingTemplate;
    incrementProgress();
});

/**
 * Fetch home temmplate and save into template object
 */
$.get('templates/homeTemplate.html', function (incomingTemplate) {
    templates.homeTemplate = incomingTemplate;
    incrementProgress();
});

/**
 * Fetch header temmplate and save into template object
 */
$.get('templates/headerTemplate.html', function (incomingTemplate) {
    templates.headerTemplate = incomingTemplate;
    incrementProgress();
});

/**
 * Fetch projects temmplate and save into template object
 */
$.get('templates/projectsTemplate.html', function (incomingTemplate) {
    templates.projectsTemplate = incomingTemplate;
    incrementProgress();
});

/**
 * Fetch contact me temmplate and save into template object
 */
$.get('templates/contactMeTemplate.html', function (incomingTemplate) {
    templates.contactMeTemplate = incomingTemplate;
    incrementProgress();
});