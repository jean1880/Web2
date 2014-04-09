var WelcomeView = Backbone.View.extend({
    el: "#body",
    events: {
        "click #logo-wrap": 'navHome'
    },
    render: function() {
        $('#header').html('');
        if (templates.welcomeTemplate != undefined) {
            this.$el.html(Handlebars.compile(templates.welcomeTemplate)()).trigger('create');
            this.progressLoader();
            this.reframe();
        } else {
            var that = this;
            $.get('templates/welcomeTemplate.html', function(incomingTemplate) {
                that.$el.html(Handlebars.compile(incomingTemplate)()).trigger('create');
                that.progressLoader();
                that.reframe();
            });
        }
    },
    reframe: function() {
        $('#center').css('height', $(window).innerHeight());
        $(window).resize(function() {
            $('#center').css('height', $(window).innerHeight())
        });
    },
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
        } else {
            var that = this.$el;
            $.get('templates/homeTemplate.html', function(incomingTemplate) {
                that.html(Handlebars.compile(incomingTemplate)()).trigger('create');
            });
        }
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