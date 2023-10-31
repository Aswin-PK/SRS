$(document).ready(function(){
    $('.slider').each(function(){
    $(this).slick({
        infinite: true, // Enable infinite scrolling
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable autoplay
        autoplaySpeed: 5000, // Autoplay speed in milliseconds (adjust as needed)
        dots: false, // Show navigation dots
        arrows: false, // Show navigation arrows
    });
    });
});

function handleClick(){
    document.getElementById('dropdownDivider').classList.toggle('hidden')
    document.getElementById('dropdownDivider').classList.toggle('absolute')
}

window.onscroll = function(){
    scrollfunction();
}
function scrollfunction(){
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    document.getElementById("navbar").classList.remove('hidden');
  }
  else{
    document.getElementById("navbar").classList.add('hidden');
  }
}
