// FOR IMAGE SLIDER 
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
        swipe: false, // restrict manual swipe scroll
    });
    });
});

// FOR NAVBAR MENU ICON FOR SMALLER SCREEN
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdownDivider');
    
    // Check if the clicked element is not within the dropdown
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('hidden');
        dropdown.classList.remove('absolute');
    }
});
function handleClick(){
    document.getElementById('dropdownDivider').classList.toggle('hidden')
    document.getElementById('dropdownDivider').classList.toggle('absolute')
}


// FOR GETTING SCROLL VALUE FOR DISPLAYING NAVBAR
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
