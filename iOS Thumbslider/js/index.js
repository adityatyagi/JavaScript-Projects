var autoscroll;
$(document).ready(function(){
	
	var totalWidth = 0;
	var positions = new Array();




	// calculating the total width of all the images in the slider combined

	$('#slider .slide').each(function(i){

		positions[i] = totalWidth;
		totalWidth += $(this).width(); // add width of individual pictures to totalWidth

		// if the <img> doesnt have a width
		if(!$(this).width()){
			alert("Add width to your images");
			return false;
		}

	});




	// making the width of the slider div equal to the totalWidth, the overflow is hidden, therefore the images won't be visible 
	$('#slides').width(totalWidth);

	




	//Add acive class to the first product
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');




	// scroll on clicking the pictures. Use parents(), siblings(), prevAll() and two classes -> active and inactive

	$('#menu ul li a').click(function(e, keepScroll){

		// Remove active class and inactive class
		$('li.product').removeClass('active').addClass('inactive');

		// Add active class to parent
		$(this).parent().addClass('active');


		var pos = $(this).parent().prevAll('.product').length; // pos will store the position of the clicked thumbnail (0,1,2,3)

		$('#slides').stop().animate( {marginLeft: -positions[pos]+'px'}, 450); // shift left by these many px 

		

		// prevent default
		e.preventDefault();

		// Stop Autoscroll
		if(!autoScroll){
			clearInterval(itvl);
		} 


	});


	// Autoscroll function
	var current = 1;
	function autoScroll(){
		if(current == -1) return false;
		 
		
		$('#menu ul li a').eq(current % $('#menu ul li a').length).trigger('click', [true]); 

		

		/*    % $('#menu ul li a').length    -> this is helping the autoslider to go back to 1st thumbnail. 
		% is the modulo operator. $('menu ul li a').length = 4
		current = 1, 2, 3, 4, 5, 6.......

		1 % 4 = 1
		2 % 4 = 2
		3 % 4 = 3
		4 % 4 = 0 (back to 0th index i.e. 1st thumbnail)
		*/
		current++;
	}

	// Duration for autoscroll
	var duration = 10;
	var itvl = setInterval(function(){
		autoScroll()
	}, duration*1000);
});