'use strict';
//include npm slack module
var Slack = require('slack-node');

//instantiate date object
var date = new Date();

//instantiate reminder object
var Reminder = require('reminder');
var remind = new Reminder();


module.exports.postSlack = function(req, res) {
	
	if(checkDate()){
		var webhookUri = "https://hooks.slack.com/services/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";

	  	var slack = new Slack(); 
	  	slack.setWebhook(webhookUri);

	  	slack.webhook({
			channel: "#slack_test",
			username: "webhookbot",
			text: "This is posted to #general and comes from a bot named webhookbot."
			}, function(err, response) {
			console.log(response);
	  	});

		res.send("true");
	}
};

function checkDate(){
	//check if it's a weekday
	var day_of_wk = date.getDay();

	if(day_of_wk != 6 || day_of_wk != 0){
		// remind.every('minute', function(date){			
		// 	return true;	
		// })
		return true;
	}

};