$(document).ready(function() 
{
    $('#fullpage').fullpage({scrollBar: true, loopHorizontal: true, afterLoad: function(anchorLink,index)
    	{
    		console.log(index);

		    $('.fade_in_first_slide_'+index).animate({'opacity':1},400,function()
		    	{
		    		$('.fade_in_second_slide_'+index).animate({'opacity':1},400, function()
		    			{
				    		$('.fade_in_third_slide_'+index).animate({'opacity':1},400);
		    			});
		    	});  		
    	}});

});
