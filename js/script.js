$(document).ready(function(){

	$('.counter2').countdown360({
    	radius      : 60,
	    seconds     : 50,
	    fontColor   :'#FFFFFF',
	    onComplete  :function () { console.log('done') }

    });

});