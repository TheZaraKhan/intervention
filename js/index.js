$(document).ready(function () {
  $(".burger").click(function () {
    $(".menu").show(100);
    $(".burger").hide(100);
  });
  $(".item").click(function () {
    $(".menu").hide(100);
    $(".burger").show(100);
  });
  $(".cross").click(function () {
    $(".menu").hide(100);
    $(".burger").show(100);
  });
});

$(".articles").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
document.querySelector(".slick-prev").innerHTML =
  '<img  class="absolute md:w-12 w-8  md:-left-20  sm:-left-10 -left-7 z-10" style="top:43%;" src="/assets/icon-left.png">';
document.querySelector(".slick-next").innerHTML =
  '<img  class="absolute md:w-12 w-8  md:-right-20 sm:-right-10 -right-7 z-10" style="top:43%"  src="/assets/icon-right.png">';

$(".products").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
document.querySelector(".slick-prev").innerHTML =
  '<div  class="absolute md:w-12 w-8 md:-left-20  -left-10 z-10" style="top:43%;"> <svg version = "1.2" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 58 57"  width = "58" height = "57" ><defs><image width="43" height="79" id="img1" href="data:image/png;base64,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"/></defs><style>.s0{fill:none;stroke:#d6d6d6}</style><use  href="#img1" transform="matrix(-0.186,0,0,.19,33,22)"/><path class="s0" d="m29.5 0c15.7 0 28.5 12.8 28.5 28.5c0 15.7-12.8 28.5-28.5 28.5c-15.7 0-28.5-12.8-28.5-28.5c0-15.7 12.8-28.5 28.5-28.5z" /></svg ></div>';
document.querySelector(".slick-next").innerHTML =
  '<div  class="absolute md:w-12 w-8  md:-right-20  -right-10 z-10" style="top:43%">  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 57" width="59" height="57"><defs><image width="43" height="79" id="img1" href="data:image/png;base64,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"/></defs><style>.s0{fill:none;stroke:#d6d6d6}</style><use  href="#img1" transform="matrix(.186,0,0,.19,26,22)"/><path class="s0" d="m29.5-0.1c15.8 0 28.6 12.8 28.6 28.6c0 15.8-12.8 28.6-28.6 28.6c-15.8 0-28.6-12.8-28.6-28.6c0-15.8 12.8-28.6 28.6-28.6z" /></svg>  </div>';

$(".instagram").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});
document.querySelector(".slick-prev").innerHTML =
  '<div  class="absolute md:w-12 w-8 md:-left-20  -left-10 z-10" style="top:43%;"> <svg version = "1.2" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 58 57"  width = "58" height = "57" ><defs><image width="43" height="79" id="img1" href="data:image/png;base64,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"/></defs><style>.s0{fill:none;stroke:#d6d6d6}</style><use  href="#img1" transform="matrix(-0.186,0,0,.19,33,22)"/><path class="s0" d="m29.5 0c15.7 0 28.5 12.8 28.5 28.5c0 15.7-12.8 28.5-28.5 28.5c-15.7 0-28.5-12.8-28.5-28.5c0-15.7 12.8-28.5 28.5-28.5z" /></svg ></div>';
document.querySelector(".slick-next").innerHTML =
  '<div  class="absolute md:w-12 w-8  md:-right-20  -right-10 z-10" style="top:43%">  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 57" width="59" height="57"><defs><image width="43" height="79" id="img1" href="data:image/png;base64,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"/></defs><style>.s0{fill:none;stroke:#d6d6d6}</style><use  href="#img1" transform="matrix(.186,0,0,.19,26,22)"/><path class="s0" d="m29.5-0.1c15.8 0 28.6 12.8 28.6 28.6c0 15.8-12.8 28.6-28.6 28.6c-15.8 0-28.6-12.8-28.6-28.6c0-15.8 12.8-28.6 28.6-28.6z" /></svg>  </div>';
