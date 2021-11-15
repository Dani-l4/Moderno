$(function(){

	$('.weektrend__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 3,
		infinite: true,
  });
	 $(".star_rate").rateYo({
    starWidth: "12px",
    readOnly: true,
    rating: 5,
  });

	 $('.menu__btn').on('click', function(){
	 	$('.menu__list').slideToggle();
	 });
	 
	$('.header__btn-menu').on('click', function(){
	 	$('.header__box').toggleClass('active');
	 });

	var mixer = mixitup('.products__inner-box');
});
