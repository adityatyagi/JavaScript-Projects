//declaring global variables
var action = "click";
var speed = "500";

$(document).ready(function(){


	$('li.q').on(action,function(){

		$(this).next()  //next sibling of <li class="q"> will be <li class="a">,  slideToggle -> slideUp() + slideDown()
					.slideToggle(speed)

						.siblings('li.a') // Select all other answers
							.slideUp();

			//active img of selected question is var img	-> // Get image for active question			
			var img = $(this).children('img') //name of element is img, as <img> is inside <li>, it is a DIRECT child of <li>

			
			// Remove the 'rotate' class for all images except the active
			$('img').not(img).removeClass('rotate');


			//toggle rotate class with the active img element
			img.toggleClass('rotate');  // toggleClass = removeClass() + addClass()

	});

})