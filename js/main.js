$(document).ready(function () {

	console.log("ready!");

	/////////////////////Challenges//////////////////////////////////////////////
	
	// $.ajax({
	// 	url: 'https://cryptic-river-3268.herokuapp.com/api/challengev/'
	// }).then(function (resp) {
	// 	console.log(resp);
	// });

	var Router = Backbone.Router.extend({
    initialize: function() {
      Backbone.history.start({pushState: true});
    },
    routes: {
     "title": "title",
     "description": "description",
	"video":"video",
      "": "index"
    }
  });

	var router = new Router();

	
	var challengeModel = Backbone.Model.extend({
		initialize:function(){
		},
		defaults:{
			"title": null,
			"description": null,
			"video": null
		},
		Model:challengeModel,
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
			var challengesHTML = Mustache.render(challengeTemplate, challengeInfo);	
			$("#challenge").html(challengesHTML);

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
		model: topRateModel,
		url: 'https://cryptic-river-3268.herokuapp.com/api/topchallengev/'
	});

	var topRates = new topRateCollection();

	topRates.fetch({
		success: function (resp) {
			var topRateInfo = {
				'topRates': resp.toJSON()
			};
			var topRateTemplate = $("#topRatesTemplate").text();
			var topRatesHTML = Mustache.render(topRateTemplate, topRateInfo);

			$("#top").html(topRatesHTML);

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
			var submissionInfo = {
				'submissions': resp.toJSON()
			};
			var submissionTemplate = $("#submissionsTemplate").text();
			var submissionsHTML = Mustache.render(submissionTemplate, submissionInfo);

			$("#sub").html(submissionsHTML);

		},
		error: function (err) {
			console.log("error", err);
		}
	});


	////////////////////////////////////////////////////////////
	$("body").on('click', 'a', function (e) {
		e.preventDefault();
		var href = $(this).attr('href');
		href = href.substr(1);
		router.navigate(href, {
			trigger: true
		});
	});

	
	
	$("#sub").hide();
	
});