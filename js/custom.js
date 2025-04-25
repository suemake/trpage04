$(function () {
  $('.main_visual_slide').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    speed: 1000,
  });

});


$(function () {
  const MMS = new Swiper(".main_our_slide", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 80,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    speed: 5000,
  });

  const MIS = new Swiper(".main_interior_slide", {
    loop: true,
    effect: "fade",
    pagination: {
      el: ".main_interior .page",
      clickable: true,
    },
    navigation: {
      nextEl: ".main_interior .next",
      prevEl: ".main_interior .prev",
    },
  });

  const MSS = new Swiper(".main_sns_slide", {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 8,
    centeredSlides: true,
    navigation: {
      nextEl: ".main_sns .next",
      prevEl: ".main_sns .prev",
    },
  });
});

$(function () {
  //스크롤이 됐을 떄 header에 on을 붙인다.
  //스크롤이 0이면 header에서 on을 땐다.
  //event : click, scroll, wheel, mouseenter, mouseleave, change

  $(window).on("scroll", function () {
    //스크롤 된 양을 구함.
    let sct = $(window).scrollTop();
    console.log(sct);

    if (sct > 0) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on");
    }
  });
});

$(function () {
  $('.to_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1000)
  })
});

$(function () {
  $('.footer #lnk').on('change', function () {
    let lnk = $(this).val();
    if (lnk) {
      window.open(lnk)
    }
  })
});


$(function () {


  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    console.log(sct)

    if (sct > 0) {
      $('.header').addClass('on')
    } else {
      $('.header').removeClass('on')
    }
  })

});




$(function () {
  $('to_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 })
  });

  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    console.log(sct)

    if (sct > 400) {
      $('.to_top').addClass('on')
    } else {
      $('.to_top').removeClass('on')
    }
  });

});


$(function () {
  $('#bgndVideo').YTPlayer({
    videoURL: 'https://youtu.be/2ol9odrzeoc',
    containment: '.main_visual',
    showControls: false,
    //하단 유튜브 바 없앤거

  });

  $('#banner').YTPlayer({
    videoURL: 'https://youtu.be/2ol9odrzeoc',
    containment: '.main_banner',
    showControls: false,
    // autoPlay: false,
    playOnlyIfVisible: true
    //스크롤해서 화면에 가까워질때 영상이 시작되게 함

  });

  let sw = true;

  $('.main_visual .con button').on('click', function () {
    if (sw) {
      $('#bgndVideo').YTPPause();
      $(this).addClass('on');
    } else {
      $('#bgndVideo').YTPPlay();
      $(this).removeClass('on');
    }

    sw = !sw;
  })

})


