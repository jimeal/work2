
$(function () {

    
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
  
}