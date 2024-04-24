
$(function () {


  var swiper = new Swiper(".eventSwiper", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed:500,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {

      1281: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        speed:500,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    },
  }
  });



  var swiper = new Swiper(".bcdSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: "true",
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1001: {
        slidesPerView: "auto",
        spaceBetween: 18,
        centeredSlides: true,
        loop: "true",
        autoplay: {
          delay: 3000,
        },
      },
    }

    });





    var swiper = new Swiper(".bcdtitleSwiper", {
      direction: "vertical",
      slidesPerView: 4,
      loop: "true",
      spaceBetween: 10,
      allowTouchMove: false,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        601: {
          direction: "vertical",
          slidesPerView: 4,
          loop: "true",
          allowTouchMove: false,
          spaceBetween: 15,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
        },
      }
    });


    var swiper = new Swiper(".bcdpaySwiper", {
      spaceBetween: 50,
      loop: "true",
      allowTouchMove: false,
      autoplay: {
        delay: 1200,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper(".bcdpay2Swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: "true",
      allowTouchMove: false,
      autoplay: {
        delay: 1200,
        disableOnInteraction: false,
      },
    });



  // main review slide
  // var reviewLswiper = new Swiper(".reviewSwiperL", {
  //   direction: "horizontal",
  //   slidesPerView: "auto",
  //   spaceBetween: 20,
  //   loop: "true",
  //   speed:15000,
  //   allowTouchMove: false,
  //   autoplay: {
  //     delay: 0,
  //   },
  //   breakpoints: {
  //     1281: {
  //       direction: "vertical",
  //       slidesPerView: "auto",
  //       spaceBetween: 30,
  //       loop: "true",
  //       speed:15000,
  //       allowTouchMove: false,
  //       autoplay: {
  //         delay: 0,
  //       },
  //   },
  // }
  // });

  // var reviewRswiper = new Swiper(".reviewSwiperR", {
  //   direction: "horizontal",
  //   slidesPerView: "auto",
  //   spaceBetween: 20,
  //   loop: "true",
  //   speed:15000,
  //   allowTouchMove: false,
  //   autoplay: {
  //     delay: 0,
  //     reverseDirection: true,
  //   },
  //   breakpoints: {
  //     1281: {
  //       direction: "vertical",
  //       slidesPerView: "auto",
  //       spaceBetween: 30,
  //       loop: "true",
  //       speed:15000,
  //       allowTouchMove: false,
  //       autoplay: {
  //         delay: 0,
  //         reverseDirection: true,
  //       },
  //   },
  //   }
  // });





    $('#termpopOpen').click(function(){
        $(".modalBox").addClass("show");
    })
    $('#adrspopOpen').click(function(){
        $(".modalBox").addClass("show");
    })
    $('#popClose').click(function(){
        $(".modalBox").removeClass("show");
    })

    $("#termcheck").on("click", function () {
      $(".termdetail").slideToggle(250);
    });

      // faq Navigation
  $('.faq-nav li').click(function () {
    idx = $(this).index() + 1;
    $('.faq-nav li').removeClass('on')
    $(this).addClass('on')
    $('.faq-con div').removeClass('on')
    $('#faqCon' + idx).addClass('on')
  })

  // faq
  $(".faq-btn").click(function (e) {
    e.preventDefault();
    var faqAnswer = $(this).next();

    $('.show').not(faqAnswer).removeClass('show');
    faqAnswer.toggleClass('show');

    $('.rot').not(this).removeClass('rot');
    $(this).toggleClass('rot');
    return false
  });
  $('.faq-btn').click(function (e) {
    e.preventDefault();
    h = $(this).siblings('.answ').find('.answ-wrap').outerHeight();
    if ($(this).siblings('.answ').height() > 0) {
      $('.answ').stop().animate({
        height: 0
      }, 300)
    } else {
      $('.answ').stop().animate({
        height: 0
      }, 300)
      $(this).siblings('.answ').stop().animate({
        height: h
      }, 300)
    }
  });

      // barcode pay brand list nav
      $('.brand-nav li').click(function () {
        idx = $(this).index() + 1;
        $('.brand-nav li').removeClass('on')
        $(this).addClass('on')
        $('.brand-list div').removeClass('on')
        $('#brandCon' + idx).addClass('on')
      })
    

    // gnb > sub-gnb
    $('.dept1').hover(function () {
        var hoverTarget = $(this).children().next();
        hoverTarget.toggleClass("on");
      });


      $("#file").on('change',function(){
        var fileName = $("#file").val();
        $(".upload-name").val(fileName);
      });

      
    $('.mmenuopen').click(function(){
      var mmenuTarget = $(".header");
      mmenuTarget.toggleClass("on");
  })





    // main card information
    $(".info-btn").click(function (e) {
      e.preventDefault();
      var faqAnswer = $(this).next();
  
      $('.show').not(faqAnswer).removeClass('show');
      faqAnswer.toggleClass('show');
  
      $('.rot').not(this).removeClass('rot');
      $(this).toggleClass('rot');
      return false
    });

    $('.info-btn').click(function (e) {
      e.preventDefault();
      h = $(this).siblings('.info').find('.info-wrap').outerHeight();
      if ($(this).siblings('.info').height() > 0) {
        $('.info').stop().animate({
          height: 0
        }, 300)
      } else {
        $('.info').stop().animate({
          height: 0
        }, 300)
        $(this).siblings('.info').stop().animate({
          height: h
        }, 300)
      }
    });

    $(window).scroll(function () {
      curr = $(window).scrollTop();
      if (curr > 400) {
        $('.header.main').removeClass('hdst2');
      } else {
        $('.header.main').addClass('hdst2');
      }
    });

    $(window).scroll(function () {
      curr = $(window).scrollTop();
      if (curr > 400) {
        $('.appcta').addClass('on');
      } else {
        $('.appcta').removeClass('on');
      }
    });


    AOS.init();


  

})