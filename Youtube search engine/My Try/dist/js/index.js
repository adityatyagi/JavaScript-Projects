$(document).ready(function(){

	//---------- animate the search field ---------------------

	var searchField = $('#query');
	var searchBtn = $('.search-btn');

	//Focus Event Handler

	$(searchField).on('focus',function(){
		$(this).animate({
			width: '100%'
		},400);

		
	});

	//Blur event handler

	$(searchField).on('blur',function(){
		if(searchField.val() == ""){
			$(searchField).animate({
				width: '80%'
			},400,function(){});

			
		}
	});


	//preventing the form to submit
	$('#search-form').submit(function(e){
		e.preventDefault();
	});


});





//----------------working with API ----------------

function search(){

	

	//clearing out the html for previous results for both the content and the pagination buttons
	$('#results').html('');
	$('#pagination-buttons').html('');


	// Get Form Input
	q = $('#query').val();


	// Run GET request on API
	$.get(

		"https://www.googleapis.com/youtube/v3/search",
		{
			part: 'snippet,id',
			q: q,
			type: 'video',
			key: 'AIzaSyB70yJqPNZCPQb_n22uckfPbV_xwfY4Oxs',
			

		},

		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;

			//Log Data
			console.log(data);

			//Get Output
			$.each(data.items, function(i, item){
				var output = getOutput(item);

				// display Results
				$('#results').append(output);
			});

			var buttons = getButtons(prevPageToken, nextPageToken);

			//display buttons
			$('#pagination-buttons').append(buttons);
		}

		);



}



// build output

function getOutput(item){

	var videoId = item.id;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;  //will give high quality thumbnail
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;


	// create the output string

	var output  = '<li>' +

	'<div class="list-left">' +
	'<img src =" '+thumb+' ">' +
	'</div>' +

	'<div class="list-right">' +
	'<h3> '+title+' </h3>' +
	'<small> By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+' </small>' +
	'<p>'+description+'</p>'
	'</div>' +

	'</li>' +

	'<div class="clearfix"></div>' +
	'';

	return output;

}



// build the buttons

function getButtons(prevPageToken, nextPageToken){

	if(!prevPageToken){
		var btnoutput = '<div class="button-container">' +
						'<button id="next-button"    class="paging-button"      data-token=" '+nextPageToken+' "       data-query="'+q+'"   onclick="nextpage();">Next Page</button> </div>';
	}
	else{

		var btnoutput = '<div class="button-container">' +
						'<button id="prev-button"  class="paging-button"      data-token=" '+prevPageToken+' "       data-query="'+q+'"  onclick="prevPage();">Previous Page</button>' +
						'<button id="next-button"    class="paging-button"      data-token=" '+nextPageToken+' "       data-query="'+q+'" onclick="nextPage();">Next Page</button> </div>';	

	}

	return btnoutput;
}