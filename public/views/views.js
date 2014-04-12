/**
 * Website views generator
 * @class views.views.js
 */

/**
 * Handles the welcomeview, generates theetemplate to output to the user as needed, anddisplays the results
 * @method WelcomeView
 */
var WelcomeView = Backbone.View.extend({
    /**
     * Root element of the view
     * @type {String}
     */
    el: "#body",
    /**
     * Binds events on the view to methods
     * @type {Object}
     */
    events: {
        "click #logo-wrap": 'navHome'
    },
    /**
     * Retrieves the welcome template and displays it to the user
     * @method render
     */
    render: function() {
        $('#header').html(''); //ensure that the header is cleared
        if (templates.welcomeTemplate != undefined) { // if template has been prefetched loadtemplate from cache
            this.$el.html(Handlebars.compile(templates.welcomeTemplate)()).trigger('create');
            this.progressLoader();
            this.reframe();
        } else { // Retrieve the template and render it to the browser
            var that = this;
            $.get('templates/welcomeTemplate.html', function(incomingTemplate) {
                that.$el.html(Handlebars.compile(incomingTemplate)()).trigger('create');
                that.progressLoader();
                that.reframe();
            });
        }
    },
    /**
     * Redraws the main frame as window changes size to ensurethat button remains in center of the screen
     * @method reframe
     */
    reframe: function() {
        $('#center').css('height', $(window).innerHeight());
        $(window).resize(function() {
            $('#center').css('height', $(window).innerHeight())
        });
    },
    /**
     * Hides progress bar when template prefetch finishes
     * @method progressLoader
     */
    progressLoader: function(){
        if(progress == 100){
            $('.progress').hide()
        }
    },
    navHome: function() {
        $('#logo-wrap').prepend(Handlebars.compile(templates.pulseEffectTemplate));
        setTimeout(function() {
            $('#center').addClass('slideOutUp animated');
            setTimeout(function(){
                app_router.navigate('home',true)
            },300);
        }, 1000);
    }
});

var HomeView = Backbone.View.extend({
    el: "#body",
    events: {},
    render: function() {
        console.log('test');
        header.render();
        if (templates.homeTemplate != undefined) {
            this.$el.html(Handlebars.compile(templates.homeTemplate)()).trigger('create');
            this.showView();
        } else {
            var that = this;
            $.get('templates/homeTemplate.html', function(incomingTemplate) {
                that.$el.html(Handlebars.compile(incomingTemplate)()).trigger('create');
                that.showView();
            });
        }
    },
    showView: function(){
        $('.body').addClass('fadeIn animated');
    }
});

var HeaderView = Backbone.View.extend({
    el: "#header",
    events: {},
    render: function() {
        if (templates.headerTemplate != undefined) {
            this.$el.html(Handlebars.compile(templates.headerTemplate)()).trigger('create');
        } else {
            var that = this.$el;
            $.get('templates/headerTemplate.html', function(incomingTemplate) {
                that.html(Handlebars.compile(incomingTemplate)()).trigger('create');
            });
        }
    }
});
