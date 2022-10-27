jQuery(function($) {
    $(function() {
        var scroll_func = function() {
            $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow', 'swing');
            return false;
        }
        $(function() {
            $('.anchor').click(scroll_func);
        });
    });
});


// let enterEventCount = 0;
// let leaveEventCount = 0;
// const showmenu = document.getElementById("research");
// const mouseTarget = document.getElementById('menu-one');
// const mouseTarget2 = document.getElementById('menu-two');

// // const unorderedList = document.getElementById('unorderedList');

// mouseTarget.addEventListener('mouseenter', (e) => {
//   console.log("Mouse Enter");
//   toggleModal();
// });

// // mouseTarget.addEventListener('mouseleave', (e) => {
// //   console.log("Mouse Leave");
// //   toggleModal();

// // });

// mouseTarget2.addEventListener('mouseenter', (e) => {
//     console.log("Mouse Enter2");
//   });
  
//   mouseTarget2.addEventListener('mouseleave', (e) => {
//     console.log("Mouse Leave2");
//   });
  
// var toggleModal = () => {
// showmenu.classList.toggle("active");
// };  

/*----------------------Global Navigation--------------------------*/
// $(function(){
//     $(document).on({ "mouseenter": function(){
//                 if(!$('#menu-one').hasClass('is-active'))
//                 {
//                    $('#menu-one').addClass('is-active');
//                 }
//                 if(!$('.wrapper').hasClass('nav-open'))
//                 {
//                     $('.wrapper').addClass('nav-open');
//                 }
//                 if(!$('#research').hasClass('open'))
//                 {
//                     $('#research').addClass('open');
//                 }                   
                                
//           },
//       }, "#menu-one");
//       $(document).on({
//           "mouseleave": function(){
//               $('#research').removeClass('open');
//               $('#menu-one').removeClass('is-active');
//               $('.wrapper').removeClass('nav-open');    
//               $('.acco-h').next('.acco-detail').slideUp();
//               $('.acco-h').removeClass('active');

//           },
//       }, "#research.open");  

//       $(document).on({ "mouseenter": function(){
//         if(!$('#menu-two').hasClass('is-active'))
//         {
//            $('#menu-two').addClass('is-active');
//         }
//         if(!$('.wrapper').hasClass('nav-open'))
//         {
//             $('.wrapper').addClass('nav-open');
//         }
//         if(!$('#researchh').hasClass('open'))
//         {
//             $('#researchh').addClass('open');
//         }                   
                        
//   },
// }, "#menu-two");
// $(document).on({
//   "mouseleave": function(){
//       $('#researchh').removeClass('open');
//       $('#menu-two').removeClass('is-active');
//       $('.wrapper').removeClass('nav-open');    
//       $('.acco-h').next('.acco-detail').slideUp();
//       $('.acco-h').removeClass('active');

//   },
// }, "#research.open");

//       $(document).on('click', '.is-active', function(){
//         $('#menu-one').removeClass('is-active');
//         $('.wrapper').removeClass('nav-open');
//         $('#research').removeClass('open');
//         $('.acco-h').next('.acco-detail').slideUp();
//         $('.acco-h').removeClass('active');
//       });

//       /*----------------------Smart Phone用の設置--------------------------*/
//       var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
//       if(touch)
//       {

//         $(document).on('click', '.gmenu', function(){
//           $('.gmenu').addClass('is-active');
//           $('.wrapper').addClass('nav-open');
//           $('.nav').addClass('open');
//         });
//         $(document).on('click', '.is-active', function(){
//           $('.gmenu').removeClass('is-active');
//           $('.wrapper').removeClass('nav-open');
//           $('.nav').removeClass('open');
//           $('.acco-h').next('.acco-detail').slideUp();
//           $('.acco-h').removeClass('active');
//         });
//       }
//   });
/*----------------------Global Navigation--------------------------*/

$(document).ready(function(){
    $(".menu__services").mouseenter(function() {
        $('.menu__services--hover').removeClass('d-none')
    });

    $(".menu__services, .menu__services--hover").mouseleave(function() {
        setTimeout(function(){
            if(!$('.menu__services:hover').length && !$(".menu__services--hover:hover").length){
                $(".menu__services--hover").addClass('d-none')
            }
        }, 50);
    });

    $(".menu__services2").mouseenter(function() {
        $('.menu__services2--hover').removeClass('d-none')
    });

    $(".menu__services2, .menu__services2--hover").mouseleave(function() {
        setTimeout(function(){
            if(!$('.menu__services2:hover').length && !$(".menu__services2--hover:hover").length){
                $(".menu__services2--hover").addClass('d-none')
            }
        }, 50);
    });

    $(".menu__services3").mouseenter(function() {
        $('.menu__services3--hover').removeClass('d-none')
    });

    $(".menu__services3, .menu__services3--hover").mouseleave(function() {
        setTimeout(function(){
            if(!$('.menu__services3:hover').length && !$(".menu__services3--hover:hover").length){
                $(".menu__services3--hover").addClass('d-none')
            }
        }, 50);
    });

    $(".menu__services6").mouseenter(function() {
        $('.menu__services6--hover').removeClass('d-none')
    });

    $(".menu__services6, .menu__services6--hover").mouseleave(function() {
        setTimeout(function(){
            if(!$('.menu__services6:hover').length && !$(".menu__services6--hover:hover").length){
                $(".menu__services6--hover").addClass('d-none')
            }
        }, 50);
    });
});

// $(document).ready(function () {
//     var startPos = 0,
//       winScrollTop = 0;
//     $(window).on("scroll", function () {
//       winScrollTop = $(this).scrollTop();
//       if (winScrollTop >= startPos && winScrollTop > 50) {
//         $(".header").addClass("scroll-header");
//       } 
//     //   else {
//     //     $(".header").removeClass("scroll-header");
//     //   }
//       startPos = winScrollTop;
//     });
//     });