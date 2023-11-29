let swipers=[];
document.addEventListener('DOMContentLoaded', function() {
	$('.swiper').each(function(idx,obj) {
		var p = '.sec0'+(idx+1);
		var swiper = new Swiper(p + " .swiper", {
			centeredSlides: false,
			slidesPerView: 3,
			spaceBetween: 20,
			breakpoints: {
				577: {
					slidesPerView:1,
					spaceBetween: 20
				},
				760: {
					slidesPerView:2,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView:3,
					spaceBetween: 20,
				}
			},
			loop: false,
			navigation: {
				nextEl: p + " .swiper-button-next",
				prevEl: p + " .swiper-button-prev",
			},
			pagination: {
				el: p + " .swiper-pagination",
				clickable: true
				//type: "progressbar",
			}
		});
		swipers.push(swiper);
	});

});
function goPage(h) {
	location.href='/site'+h;
}
function scrollTo2(el) {
	if($(el).length==0) return;

	el = $(el)[0];
	el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}