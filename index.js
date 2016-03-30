$(function(){
	var el="";
	var row=22;
	
	for(var i=0;i<row*row;i++){
		el+="<div></div>";
	}
	$('.start').click(function(){
		$(this).removeClass('start').next().css('display','block')
	})

	$('#sence')
	.html(el)
	.find('div')
	.addClass('block')
	
	.end()
	.find('div:lt(22)').removeClass().end()
	.find('div:gt(462)').removeClass().end()
	.find('div:nth-child(22n)').removeClass().end()
	.find('div:nth-child(22n+1)').removeClass().end()

	.find('div').each(function(i){
		$(this).data('index',i);
	}).end()
	.find('.block').each(function(i){
		$(this).addClass('col')
		if(Math.random()>0.9){
				$(this).data('is',true);
			}
	})
	.mousedown(function(e){
	  if(e.which == 1){
		if($(this).data('is')){
			alert('bow!!!!!!')
			$('#sence .block')
			.removeClass()
			.addClass('block')
			.addClass(function(i){
				$(this).css('animation-delay',(Math.random()).toFixed(2)+'s')
				$(this).css('-webkit-animation-delay',(Math.random()).toFixed(2)+'s')
						
				if($(this).data('is')){
					return 'is scale';
				}
				$('.again').css('display','block');	
			})

		}else{
			var shuzi=0;
			var pos=$(this).data('index')
			if($('#sence div').eq(pos-1).data('is')){shuzi++}
			if($('#sence div').eq(pos+1).data('is')){shuzi++}
			if($('#sence div').eq(pos-22).data('is')){shuzi++}
			if($('#sence div').eq(pos+22).data('is')){shuzi++}
			if($('#sence div').eq(pos-21).data('is')){shuzi++}
			if($('#sence div').eq(pos+21).data('is')){shuzi++}
			if($('#sence div').eq(pos+23).data('is')){shuzi++}
			if($('#sence div').eq(pos-23).data('is')){shuzi++}
			if($('.block').hasClass('is scale')){
				return;
			}else{
				$(this).removeClass('col').addClass('cols');
				$(this).text(shuzi);
			}	
			

		}
	  }else if(e.which == 3){
	  	$(this).removeClass('col').addClass('block1');
	  	$(this).click(function(){
	  		$(this).text('');
	  	})
	  }
	})
	$('.again').click(function(){
   		$('#sence .block').empty().removeClass().addClass('block col');
		$('#sence .block').each(function(){
		    $(this).removeData('is');
		    if(Math.random()>0.9){
		    	$(this).data('is',true)
		    }
		})
   		
   		$(this).css('display','none');
	})
	document.oncontextmenu = function ()
	{
	  return false;
	}
 

})
