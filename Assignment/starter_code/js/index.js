$(document).ready(start);

function start(){
  $('.mobile-nav').click(showMobileNav);
  console.log('click');
}

function showMobileNav(){
  $('nav').slideToggle();
}
