$(document).ready(function() 
{
    $('#fullpage').fullpage({scrollBar: true, loopHorizontal: true, afterLoad: function(anchorLink,index)
    	{
		    $('.fade_in_first_slide_'+index).animate({'opacity':1},400,function()
		    	{
		    		$('.fade_in_second_slide_'+index).animate({'opacity':1},400, function()
		    			{
				    		$('.fade_in_third_slide_'+index).animate({'opacity':1},400);
		    			});
		    	});  		

		    if (index == 5)
		    {
		    	$('.triangle').animate(
				        {rotation: 360},
        				{
							duration: 300,
							step: function(now, fx) 
							{
             					$(this).css({"transform": "rotate("+now+"deg)"});
          					}
        				});
		    	$('.triangle').fadeOut('slow');
		    }
		    else
		    {
		    	$('.triangle').animate(
				        {rotation: 0},
        				{
							duration: 300,
							step: function(now, fx) 
							{
             					$(this).css({"transform": "rotate("+now+"deg)"});
          					}
        				});
		    	$('.triangle').fadeIn('slow');	    	
		    }
    	}});

    $('.triangle').click(function()
	    {
			$.fn.fullpage.moveSectionDown();
	    });

});
