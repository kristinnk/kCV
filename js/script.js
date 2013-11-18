var selected = "aboutMeButton";

$(document).ready(function(){

	$(window).scroll(function(){
		var s = $(this).scrollTop();
		$(document.body).css({ backgroundPosition: "0px " + (s/3)*-1 + "px"} );
		//$(document.body).css("-webkit-transform","translateY(" + (s*2)*-1 + "px" );
		//$(document.body).css("-moz-transform","translateY(" + (s*2)*-1 + "px" );
		//$(document.body).css("-ms-transform","translateY(" + (s*2)*-1 + "px" );
	});

	$('#aboutMeButton').mouseenter(function(){
		if ( selected != "aboutMeButton" ) {
			$(this).animate({
				opacity: 1.0
			}, 250 );
		}
	});

	$('#aboutMeButton').mouseleave(function(){
		if ( selected != "aboutMeButton" ) {
			$(this).animate({
				opacity: 0.5
			}, 250 );
		}
	});

	$('#academicButton').mouseenter(function(){
		if ( selected != "academicButton" ) {
			$(this).animate({
				opacity: 1.0
			}, 250 );
		}
	});

	$('#academicButton').mouseleave(function(){
		if ( selected != "academicButton" ) {
			$(this).animate({
				opacity: 0.5
			}, 250 );
		}
	});

	$('#jobButton').mouseenter(function(){
		if ( selected != "jobButton" ) {
			$(this).animate({
				opacity: 1.0
			}, 250 );
		}
	});

	$('#jobButton').mouseleave(function(){
		if ( selected != "jobButton" ) {
			$(this).animate({
				opacity: 0.5
			}, 250 );
		}
	});

	$('#myWorkButton').mouseenter(function(){
		if ( selected != "myWorkButton" ) {
			$(this).animate({
				opacity: 1.0
			}, 250 );
		}
	});

	$('#myWorkButton').mouseleave(function(){
		if ( selected != "myWorkButton" ) {
			$(this).animate({
				opacity: 0.5
			}, 250 );
		}
	});

	$('#aboutMeButton').click(function(){
		selected = "aboutMeButton";
		$('#academicButton').fadeTo(250, 0.5);
		$('#jobButton').fadeTo(250, 0.5);
		$('#myWorkButton').fadeTo(250, 0.5);
		window.location.href = "#aboutme";
	});

	$('#academicButton').click(function(){
		selected = "academicButton";
		$('#aboutMeButton').fadeTo(250, 0.5);
		$('#jobButton').fadeTo(250, 0.5);
		$('#myWorkButton').fadeTo(250, 0.5);
		window.location.href = "#academic";
	});

	$('#jobButton').click(function(){
		selected = "jobButton";
		$('#aboutMeButton').fadeTo(250, 0.5);
		$('#academicButton').fadeTo(250, 0.5);
		$('#myWorkButton').fadeTo(250, 0.5);
		window.location.href = "#jobs";
	});

	$('#myWorkButton').click(function(){
		selected = "myWorkButton";
		$('#aboutMeButton').fadeTo(250, 0.5);
		$('#academicButton').fadeTo(250, 0.5);
		$('#jobButton').fadeTo(250, 0.5);
		window.location.href = "#mywork";
	});
});

var cvApp = angular.module('myCVApp', [] );

cvApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/aboutme', {
        templateUrl: 'templates/aboutme.html',
        // controller: 'AddOrderController'
      }).
      when('/academic', {
        templateUrl: 'templates/academic.html',
        // controller: 'AddOrderController'
      }).
      when('/jobs', {
    	templateUrl: 'templates/jobexperience.html',
        // controller: 'AddOrderController'
      }).
      when('/mywork', {
 	     templateUrl: 'templates/mywork.html',
        // controller: 'AddOrderController'
      }).
      otherwise({
        redirectTo: '/aboutme'
      });
  }]);