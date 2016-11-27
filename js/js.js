$(document).ready(function(){
	
	/* номер телефона */
	$('.fa-angle-down').click(function(){

		$('.phone-inner').slideToggle();

	});

	/* плавный скрол для меню до соответствующего блока */

  $('.nav').on('click','a', function (event) {
     
        event.preventDefault();

        var id  = $(this).attr('href'),
						top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
  });

	/* Фиксация меню сверху */

    var nav= $(".nav");
    if (pageYOffset>600) {
        nav.addClass("fixed");
    }
    window.onscroll = function() {
        if (pageYOffset>600) {
            nav.addClass("fixed");
        }
        if (pageYOffset<=600) {
            nav.removeClass("fixed");
        }
    }

  /* вызов модального окна для кнопки "записаться на прием" */
	
  $('#registration').click(function() {
    
    $('#registration-doctor').modal('show');
  });

  /* вызов модального окна для кнопки "задать вопрос врачу" */
	
  $('#question').click(function() {
    
    $('#question-doctor').modal('show');
  });

  
	/* маска для телефона */

	$('.tel').mask("+38(999) 999-99-99");

	/* отправка данных формы */
	$('form').submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
		});
		return false;
	});

	/* slider*/
	
	$('.team-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		responsive:[
			{
			breakpoint: 1000,
		    settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				infinite: true,
				autoplay: true,
		    }
		},{
			breakpoint: 655,
		    settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				autoplay: false,
		    }
			},{
				breakpoint: 355,
		    settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
		    }
			}
		]
  });


	/* анимация */
	new WOW().init();

	/*  адаптивное меню  */
	
    function menu() {

        var trig = $('.trigger-js'),
            menu = $('.ul-nav');

        trig.click(function() {
            $(this).next(menu).slideToggle();
        });

        $(window).resize(function() {

            if ($(window).width() > 992) {
                menu.removeAttr('style');
            }
        });
    }
    menu();

    $('.ul-nav li a').click(function(){
		if ($(window).width() < 992) {
            $('.ul-nav').hide();
        }else{
			$('.ul-nav').show();
		}
	});
	
});