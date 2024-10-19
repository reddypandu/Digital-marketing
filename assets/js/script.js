$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
       // $('#menu-jk').scrollToFixed();
    }



})

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        autoPlay:true,
   
    });
});
$(document).ready(function(){
    $("#ads").owlCarousel({
        items:3,
        itemsDesktop:[1000,4],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        autoPlay:true,
   
    });
});
// $(document).ready(function(){
// $("#testimonial-slider").owlCarousel({
  
//     items: 1,
//     itemsDesktop:[1000,1],
//         itemsDesktopSmall:[979,1],
//         itemsTablet:[768,1],
//         navigationText:["",""],
    
//         autoplay: true,
// });
// });


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


$('#typewriteText').typewrite({
    speed: 8,
    actions: [
      {type: 'Love God. Love Each Other' },
      {delay: 1000},
      {remove: {num: 26, type: ''}},
      {type: ' No Matter Who You are'},
      {delay: 1000},
      {remove: {num: 21, type: ''}},
      {type: 'Love God. Love Each Other'},
    ]
  });


  const selectedCountries = document.querySelectorAll(".selected-country");
const countryLists = document.querySelectorAll(".country-list");

selectedCountries.forEach((selectedCountry, index) => {
    const countryList = countryLists[index];
    const angleIcon = selectedCountry.querySelector("i");

    selectedCountry.addEventListener("click", () => {
        const isOpen = countryList.style.display === "block";
        countryList.style.display = isOpen ? "none" : "block";
        angleIcon.classList.toggle("fa-angle-down", isOpen);
        angleIcon.classList.toggle("fa-angle-up", !isOpen);
    });

    countryList.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            selectedCountry.firstChild.textContent = event.target.textContent;
            countryList.style.display = "none";
            angleIcon.classList.remove("fa-angle-up");
            angleIcon.classList.add("fa-angle-down");
        }
    });

    document.addEventListener("click", (event) => {
        if (!selectedCountry.contains(event.target) && !countryList.contains(event.target)) {
            countryList.style.display = "none";
            angleIcon.classList.remove("fa-angle-up");
            angleIcon.classList.add("fa-angle-down");
        }
    });
});



