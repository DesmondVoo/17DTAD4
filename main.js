$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');

    if($(window).scrollTop() > 10){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

  });

  $('.idol').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

  $('.grand').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

  $('.talent').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

  $('.comedy').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

  $('.priceless').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });







  var images = new Array("group/group1.jpg","group/group2.jpg","group/group3.jpg","group/group4.jpg","group/group5.jpg","group/group6.jpg");
  setInterval(function(){
      var random = images[Math.floor(Math.random() * images.length )];
      $(".image").css("background","url(" + random + ")");
  },2500);

});