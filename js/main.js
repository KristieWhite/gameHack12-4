$(document).ready(function () {

    console.log("ready!");

$.ajax({
  url: 'https://cryptic-river-3268.herokuapp.com/api/challengev/'
}).then(function(resp){
  console.log(resp);
});

var Router = Backbone.Router.extend({
  initialize: function() {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "title": "title",
    "description": "description",
    "video": "video"
  }
});

var router = new Router();

var challengeContainer = Backbone.Model.extend({
  initialize: function() {
  },
  defaults: {
    title: null,
    description: null,
    video: null
  },
  Model: challengeContainer,
  url: 'https://cryptic-river-3268.herokuapp.com/api/challengev/'
});

var challengeContainers = Backbone.Collection.extend({
  Model: challengeContainer
});

var challengeCollection = new challengeContainer();

challengeCollection.fetch ({
  success: function(resp) {
    console.log("success", resp);
  },
  error: function(err) {
    console.log("error", err);
  }
});



//////////////////////Log In//////////////////////
    $(function () {
        $('#login-form-link').click(function (e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function (e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
    });
////////////////////////////////////////////////////////////

});

