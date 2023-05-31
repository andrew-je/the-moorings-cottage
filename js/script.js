$(document).ready(function(){
		

	if ($('.slider').length) {
		$('.slider').slick({
			slidesToShow:1,
			centerMode:true,
			centerPadding:"19%",
			arrows:true,
			dots:false,
			swipeToSlide:true,
			focusOnSelect: true,
			responsive: [
		    {
		      breakpoint: 570,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode:false,
		        centerPadding:"0px"
		      }
		    }
		  ]
		});
		$('.slider__wrapper .controls>span').text( 1 + " of " + $('.slider__wrapper .slick-slide:not(.slick-cloned)').length);
		$('.slider__wrapper .controls .prev__slider').on("click" ,function(e){
			e.preventDefault();
			$('.slider .slick-prev').click();
		});
		$('.slider__wrapper .controls .next__slider').on("click" ,function(e){
			e.preventDefault();
			$('.slider .slick-next').click();
		});
		$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){

			$('.slider__wrapper .controls>span').text(+currentSlide + 1 + " of " + $('.slider__wrapper .slick-slide:not(.slick-cloned)').length);
		});
	}

	$('.menu__button>a').on('click' ,function(e){
		showMenu();
	});

	$('.menu__close>a').on('click' ,function(e){
		hideMenu();
	});


	function showMenu(){
		$('.menu__wrapper').css("top" , "0px");
		$('body,html').css("overflow-y" ,"hidden");
		setTimeout(function(){
			$('.menu__wrapper .inner__menu ul li').each(function(index,elem){
			setTimeout(() => {
				$(elem).addClass('active');
			}, index*60)
		});
		}, 200);
	}
	function hideMenu(){
		$('body,html').css("overflow-y" ,"initial");		
		$('.menu__wrapper .inner__menu ul li').each(function(index,elem){
			setTimeout(() => {
				$(elem).removeClass('active');
			}, index*40)
		});
		setTimeout(function(){
			$('.menu__wrapper').css("top", "-100%");
		}, 400);
	}
});