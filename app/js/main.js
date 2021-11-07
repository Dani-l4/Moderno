$(function(){

	var mixer = mixitup('.products__inner-box');

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

});
