$(document).ready(function () {

	console.log("ready!");

/////////////////////Challenges//////////////////////////////////////////////
	// $.ajax({
	// 	url: 'https://cryptic-river-3268.herokuapp.com/api/challengev/'
	// }).then(function (resp) {
	// 	console.log(resp);
	// });

	var Router = Backbone.Router.extend({
		initialize: function () {
			Backbone.history.start({
				pushState: true
			});
		},
		routes: {
			"title": "title",
			"description": "description",
			"video": "video"
		}
	});

	var router = new Router();

	var challengeModel = Backbone.Model.extend({
		url: 'https://cryptic-river-3268.herokuapp.com/api/challengev/'
	});

	var challengeCollection = Backbone.Collection.extend({
		model: challengeModel,
		url: 'https://cryptic-river-3268.herokuapp.com/api/challengev/'
	});

	
						/* Titles */

	var challenges = new challengeCollection();
	challenges.fetch({
		success: function (resp) {
			var challengeInfo = {'challenges': resp.toJSON()};
			var challengeTemplate = $("#challengesTemplate").text();
			var challengesHTML = Mustache.render(challengeTemplate , challengeInfo);
      console.log('challengesHTML:', challengesHTML);
			$("#challenge").html(challengesHTML);
			console.log(challengeInfo);
		},
		error: function (err) {
			console.log("error", err);
		}
	});
	
	

/////////////////////////////Top Rated///////////////////////////////////////
// $.ajax({
//   url: 'https://cryptic-river-3268.herokuapp.com/api/topchallengev/'
// }).then(function (resp) {
//   console.log(resp);
// });

var topRateModel = Backbone.Model.extend({
  url: 'https://cryptic-river-3268.herokuapp.com/api/topchallengev/'
});

var topRateCollection = Backbone.Collection.extend({
  model:topRateModel,
  url: 'https://cryptic-river-3268.herokuapp.com/api/topchallengev/'
});

var topRates = new topRateCollection();

topRates.fetch({
  success: function (resp) {
    var topRateInfo = {'topRates': resp.toJSON()};
    var topRateTemplate = $("#topRatesTemplate").text();
    var topRatesHTML = Mustache.render(topRateTemplate , topRateInfo);
    console.log('topRatesHTML:', topRatesHTML);
    $("#top").html(topRatesHTML);
    console.log(topRateInfo);
  },
  error: function (err) {
    console.log("error", err);
  }
});

//////////////////////////////Submissions/////////////////////////////////////
// $.ajax({
//   url: 'https://cryptic-river-3268.herokuapp.com/api/topsubmissionv/'
// }).then(function (resp) {
//   console.log(resp);
// });

var submissionModel = Backbone.Model.extend({
  url: 'https://cryptic-river-3268.herokuapp.com/api/topsubmissionv/'
});

var submissionCollection = Backbone.Collection.extend({
  model: submissionModel,
  url: 'https://cryptic-river-3268.herokuapp.com/api/topsubmissionv/'
});

var submissions = new submissionCollection();

submissions.fetch({
  success: function (resp) {
    var submissionInfo = {'submissions': resp.toJSON()};
    var submissionTemplate = $("#submissionsTemplate").text();
    var submissionsHTML = Mustache.render(submissionTemplate , submissionInfo);
    console.log('submissionsHTML:', submissionsHTML);
    $("#sub").html(submissionsHTML);
    console.log(submissionInfo);
  },
  error: function (err) {
    console.log("error", err);
  }
});

	//////////////////////Log In////////////////////////////////////////////////
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
$(".container").hide();



	////////////////////////////////////////////////////////////////////////////
$("form").hide();
	
});

