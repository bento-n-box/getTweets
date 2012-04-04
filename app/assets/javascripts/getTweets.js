$(document).ready(function(){
	
	console.log("start");
	
	$('button').bind('click', function(){
		var textboxvalue = $('input').val();
		var tweetURL = 'http://search.twitter.com/search.json?q='+textboxvalue+'&rpp=5&include_entities=true&result_type=mixed&callback=?';
		
		$.getJSON(tweetURL, function(data){
			var tweets = data.results;
			for (var i = 0; i < tweets.length; i++){
				console.log(tweets[i].text);
				$('#query').append("<li>" + tweets[i].text + "</li>")
				
			}
		})
	
	});
	
});
