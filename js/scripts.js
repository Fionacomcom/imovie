function ProcessText(){
	if($('.field').val().length > 0){
		getBooks();
		$('.info').delay(100).hide();
	}else{
		$('.field').attr("placeholder", "Give me a searchword, please.");
	}
return false;	
};

$('.field').keyup(function (e) {
	var key = e.which;
	if(key == 13){
		ProcessText();
	}		
});

$('.search').click(function(){
	ProcessText();
	$('.info').delay(10).hide();
});

$('.infomodalDialog').hide();

$('.info').click(function(){
	console.log("boo");
	$('.infomodalDialog').slideDown();
});

// $('.infomodalDialog').click(function(){
// 	$(this).slideUp();
// }); 黑幕不关