/**
 * Website views generator
 * @class views.views.js
 */

/**
 * Handles the welcomeview, generates theetemplate to output to the user as needed, anddisplays the results
 * @class WelcomeView
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
     * Redraws the main frame as window changes size to ensure that the button remains in center of the screen
     * @method reframe
     */
    reframe: function() {
        var windowHeight    = $(window).innerHeight();
        var windowWidth     = $(window).innerWidth();
        $('#center').css('height', windowHeight);
        $("body").find('.pulse_holder').first().css('top', function(){
            return windowHeight/2 - $(this).outerHeight()/2 + $('.white-header').outerHeight() - 10;
        });
        $("body").find('.pulse_holder').first().css('left', function(){
            return windowWidth/2 - $(this).outerWidth()/2 - 27;
        });
        $(window).resize(function() { // on resize event reset element heights
            windowHeight    = $(window).innerHeight();
            windowWidth     = $(window).innerWidth();
            $('#center').css('height', windowHeight)
            $("body").find('.pulse_holder').first().css('top', function(){
                return windowHeight/2 - $(this).outerHeight()/2 + $('.white-header').outerHeight() - 10;
            });
            $("body").find('.pulse_holder').first().css('left', function(){
                return windowWidth/2 - $(this).outerWidth()/2 - 27;
            });
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
    /**
     * Navigates the user to the home page
     * @method navHome
     */
    navHome: function() {
        $('.pulse_holder').addClass('pulse_effect');
        $('.pulse_ray').addClass('pulse_effect');
        setTimeout(function() {
            $('#center').addClass('slideOutUp animated');
            setTimeout(function(){
                app_router.navigate('home',true)
            },300);
        }, 1000);
    }
});

/**
 * Handles therendering and functions of the home view
 * @class HomeView
 */
var HomeView = Backbone.View.extend({
    el: "#body",
    events: {},
    render: function() {
        console.log('test');
        header.render();
        if (templates.homeTemplate != undefined) {
            this.$el.html(Handlebars.compile(templates.homeTemplate)()).trigger('create');
            this.reframe();
            this.showView();
        } else {
            var that = this;
            $.get('templates/homeTemplate.html', function(incomingTemplate) {
                that.$el.html(Handlebars.compile(incomingTemplate)()).trigger('create');
                that.reframe();
                that.showView();
            });
        }
    },
    showView: function(){
        $('.body').addClass('fadeIn animated');
    },
    /**
     * Redraws the main frame as window changes size to ensure that content stays to full screen size
     * @method reframe
     */
    reframe: function() {
        var windowHeight    = $(window).innerHeight();
        $('.body').css('min-height', function(){
            return windowHeight - $('.navbar').innerHeight() - 20;
        });
        $(window).resize(function() { // on resize event reset element heights
            windowHeight    = $(window).innerHeight();
            $('.body').css('min-height', function(){
                return windowHeight - $('.navbar').innerHeight() - 20;
            });
        });
        
    }
});

/**
 * Handles the rendering and functions of the contact me view
 * @class ContactMeView
 */
var ContactMeView = Backbone.View.extend({
    el: "#body",
    events: {},
    render: function() {
        console.log('test');
        header.render();
        if (templates.contactMeTemplate != undefined) {
            this.$el.html(Handlebars.compile(templates.homeTemplate)()).trigger('create');
            this.reframe();
            this.showView();
        } else {
            var that = this;
            $.get('templates/contactMeTemplate.html', function(incomingTemplate) {
                that.$el.html(Handlebars.compile(incomingTemplate)()).trigger('create');
                that.reframe();
                that.showView();
            });
        }
    },
    showView: function(){
        $('.body').addClass('fadeIn animated');
    },
    /**
     * Redraws the main frame as window changes size to ensure that content stays to full screen size
     * @method reframe
     */
    reframe: function() {
        var windowHeight    = $(window).innerHeight();
        $('.body').css('min-height', function(){
            return windowHeight - $('.navbar').innerHeight() - 20;
        });
        $(window).resize(function() { // on resize event reset element heights
            windowHeight    = $(window).innerHeight();
            $('.body').css('min-height', function(){
                return windowHeight - $('.navbar').innerHeight() - 20;
            });
        });
        
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
