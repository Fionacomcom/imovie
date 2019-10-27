function getBooks(){

	$('li').remove();
	
	var searchWord = $('.field').val();
	var baseurl='http://api.themoviedb.org/3/search/movie?api_key=753d90e25748af01258588027b1fefb7&language=en-US&query="';
	var query = baseurl+searchWord;
	// ajax() 方法通过 HTTP 请求加载远程数据
    $.ajax({
		url: query,
		async: true, // 所有请求均为异步请求
		dataType: "jsonp",// JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
		// success: 请求成功后的回调函数。
		// 参数：由服务器返回，并根据 dataType 参数进行处理后的数据；描述状态的字符串。
		// 这是一个 Ajax 事件。
		success: function (result) {
			console.log(result);
			ajax.parseJSONP(result);
		}
	});
	
	
	$('#container').delay(100).fadeOut(500, function(){
		$(this).remove();
	});
	$('.deck-container').delay(600).fadeIn();
	$('header').delay(1000).fadeIn();
	$('#footer, #left, #right').delay(5000).fadeIn(50);
	
}

var ajax = {

	parseJSONP : function(result) {
		
		var sections = $('.slide');
		var perSection = Math.ceil(27 / sections.length); 
			
		$.each(result.results, function(i, row) {
		
			var secNo = Math.floor(i / perSection); 
				
			function anim(){
			
				$('.slide:eq("' + secNo + '")').append
				(
				'<li><table class="books"><tr><td>' +
				'<a href="' +'https://image.tmdb.org/t/p/w500' + row.backdrop_path + '" target="_blank">' +
				'<img src='+'https://image.tmdb.org/t/p/w500' + row.poster_path +'></a></td><td>' +
				'<a href="#openModal"><h3>' + row.title + '</h3></a>' +
				 '<h1>' +"Scores: "+row.vote_average + '</h1>' +
				'<h1>' +row.release_date + '</h1>' +
			   
				'</td><tr></table></li>'
				);
				$('li').each(function(index) {
					$(this).delay(250*index).animate({
						opacity: 1
					});
				});
			}
			setTimeout(anim, 400);
			
		});
		
	}
};




