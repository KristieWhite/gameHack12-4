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
			"profile": "profile",
			"video": "video",
			"": "index"
		}
	});


	var router = new Router();

	router.navigate("/");

	router.on('route:video', function () {
		$("#sub").show();
		$("#challenge").hide();
		$("#top").hide();
	});

	router.on('route:index', function () {
		$("#sub").hide();
		$("#challenge").show();
		$("#top").show();
	});
	
	router.on('route:profile', function () {
		$("#sub").hide();
		$("#challenge").hide();
		$("#top").show();
	});

	var challengeModel = Backbone.Model.extend({
		initialze: function () {},
		defaults: {
			"title": null,
			"profile": null,
			"video": null
		},
		Model: challengeModel,
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

			var challengeInfo = {
				'challenges': resp.toJSON()
			};
			//var partial = {description: description.html() }
			var challengeTemplate = $("#challengesTemplate").text();
			var challengesHTML = Mustache.render(challengeTemplate, challengeInfo);
			$("#challenge").html(challengesHTML);

		},
		error: function (err) {
			console.log("error", err);
		}

	});
	//render a challenge detail page
	//$('#titleClick').on('click', function() {
	//	$('challenge').html(Mustache.render(challengesDetail.html(), challengeInfo, partial));
	//	});



	/////////////////////////////Top Rated///////////////////////////////////////
	// $.ajax({
	//   url: 'https://cryptic-river-3268.herokuapp.com/api/topchallengev/'
	// }).then(function (resp) {
	//   console.log(resp);
	// });

	var topRateModel = Backbone.Model.extend({
		model: topRateModel,
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

	///////////////////////////////////////////////////////////////////////////////////
	$("body").on('click', 'a', function (e) {
		e.preventDefault();
		var href = $(this).attr('href');
		href = href.substr(1);
		router.navigate(href, {
			trigger: true
		});
	});

	$("#sub").hide();
	
	
  // 2. This code loads the IFrame Player API code asynchronously.
     var tag = document.createElement('script');

     tag.src = "https://www.youtube.com/iframe_api";
     var firstScriptTag = document.getElementsByTagName('script')[0];
     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

     // 3. This function creates an <iframe> (and YouTube player)
     //    after the API code downloads.
     var player;
     function onYouTubeIframeAPIReady() {
       player = new YT.Player('player', {
         height: '390',
         width: '640',
         videoId: 'M7lc1UVf-VE',
         events: {
           'onReady': onPlayerReady,
           'onStateChange': onPlayerStateChange
         }
       });
     }

     // 4. The API will call this function when the video player is ready.
     function onPlayerReady(event) {
       event.target.playVideo();
     }

     // 5. The API calls this function when the player's state changes.
     //    The function indicates that when playing a video (state=1),
     //    the player should play for six seconds and then stop.
     var done = false;
     function onPlayerStateChange(event) {
       if (event.data == YT.PlayerState.PLAYING && !done) {
         setTimeout(stopVideo, 6000);
         done = true;
       }
     }
     function stopVideo() {
       player.stopVideo();
     };


});