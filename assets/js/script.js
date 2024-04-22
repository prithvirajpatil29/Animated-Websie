document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add("in-view");
                entry.target.classList.add("counted");

                // Start counter for this element
                var counter = entry.target.querySelector('.counter-number');
                var targetCount = 12345;
                var duration = 2000; 
                var interval = 50; 

                var count = 0;
                var increment = targetCount / (duration / interval);

                var timer = setInterval(function() {
                    count += increment;
                    if (count >= targetCount) {
                        count = targetCount;
                        clearInterval(timer);
                    }
                    counter.innerHTML = Math.floor(count);
                }, interval);
            }
        });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll('.zoomin-animation');
    elements.forEach(element => {
        observer.observe(element);
    });
    
});




document.addEventListener("DOMContentLoaded", function() {
    const aboutUsSections = document.querySelectorAll('.aboutus-image');

    const aboutUsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aboutus-image-animation');
                aboutUsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    aboutUsSections.forEach(section => {
        aboutUsObserver.observe(section);
    });
});




$(function(){
    var navbar = $('.header-inner');
    $(window).scroll(function(){
      if($(window).scrollTop() <=40){
        navbar.removeClass('navbar-scroll');
      }else{
        navbar.addClass('navbar-scroll');
      }
    });
  });
  $(document).ready(function() {
    var navbar = $('.navbar');
    var nav_link = $('.lg-nav-link')
    var stickyNavTop = navbar.offset().top;
    var sticky_logo = $('.sticky-logo-header')
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            navbar.addClass('sticky-nav');
            navbar.addClass('white-bg'); 
            nav_link.addClass('scroll-nav-link')
            sticky_logo.addClass('sticky-logo')
            nav_link.removeClass('lg-nav-link')
        } else {
            navbar.removeClass('sticky-nav');
            navbar.removeClass('white-bg'); 
            nav_link.addClass('lg-nav-link')
            sticky_logo.removeClass('sticky-logo')
            nav_link.removeClass('scroll-nav-link')
        }
    });
});


$(document).ready(function(){
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
});


$('.vendor-carousel').owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:2
        },
        576:{
            items:4
        },
        768:{
            items:6
        },
        992:{
            items:8
        }
    }
});

AOS.init({
    once: true,
    duration: 900
   });