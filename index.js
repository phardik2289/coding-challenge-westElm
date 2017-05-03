//using Jquery 
$(document).ready(function(){

	//list of possible img
	var imgList = ['a','b','c','d'];
	var selected = 'a';

	//default select 1st img
	if(selected){
		$(".img-large").append("<div class='card'><img src='assets/product-large-"+ selected+".jpg' class='rounded float-left' alt=''></div>");
	}

	//load n number of small-img
   	jQuery.each( imgList, function( i, val ) {
   		console.log(val)
   		$(".img-small-list").append("<div class='card' id='"+ val+"'><img src='assets/product-small-"+ val+".jpg' class='card-img-top rounded float-left' alt=''></div>");
   		if(selected === val){
   			$(".img-small-list #a").css('border','2px solid black');
   		}
   	});

   	$(".img-small-list").on("click",".card",function(){

   		var selectedIMG = $(this).attr('id');
   	    if($(this).attr('id')) {

   	    	//add border to selected small-img
   	    	$(this).css('border','2px solid black');
   	    	
   	    	//change selected large-img
   	    	$(".img-large").empty();
   	    	$(".img-large").append("<div class='card'><img src='assets/product-large-"+ selectedIMG+".jpg' class='rounded float-left' alt=''></div>");   	      
   	    	
   	    	//removing border form non selected img
   	    	$('.img-small-list').each(function() {
   	    		var imgList = $(this).find(".card");
   	    		jQuery.each( imgList, function( i, val ) {
   	    			if($(val).attr('id') !== selectedIMG){
   	    				$(val).css('border','');
   	    			}
   	    		});
   	    		
   	    	});
   	    }       
   	});
   	$( "#accordion" ).accordion({
        collapsible: true
    });
});