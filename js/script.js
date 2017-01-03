 jQuery(document).ready(function(e){
        $('#flexisel').flexisel();
        $('#flexisel').flexisel({
          visibleItems: 7,
          itemsToScroll: 3,
          animationSpeed: 200,
          infinite: true
        });

    $('.about').hover(function(){

    	var children=$(this).children();
    	if($(children).text().length>80){
    		$(this).css({'overflow':'visible'});
    	$(children).css({'position':'absolute'});
    	}
    },function(){
    	var children=$(this).children();
  $(this).css({'overflow':'hidden'});
    	$(children).css('position','static');
 
    });    
$('.head').click(function(e){
	var target=$(e.target);
	var frm=$('form');
	var input=$(frm).children().children('input');
	var attr=$(target).attr('data-submit');
	if(attr){
			if(attr=='search'){
				search(input,frm);
			}
	}else{
		del(input);
	}
	function search(input,frm){
		if($(input).val()==''){
			$(input).attr('placeholder','Введите запрос').css({'boxShadow':'0 0 10px red'});
		}else{
			$(frm).submit();
		}
	}
	function del(input){
		$(input).attr('placeholder','Поиск').css('boxShadow','none');
	}
});
	$('.sort-but').click(function(){
		if($(this).hasClass('sort-one')){
			$(this).css({'background':'#009de0','color':'#fff'});
			$('.sort-two').css({'background':'','color':''});
		}
		else if($(this).hasClass('sort-two')){
		$(this).css({'background':'#009de0','color':'#fff'});
			$('.sort-one').css({'background':'','color':''});
		}	
		
	});



 });