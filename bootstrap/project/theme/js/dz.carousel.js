/**
/**
Core script to handle the entire theme and core functions
**/
var MoonCartCarousel = function(){
	
	// Main Swiper1====
	var handleMainSwiper = function() {
		if(jQuery('.main-swiper').length > 0){
			var swiper = new Swiper(".main-swiper-thumb", {
				loop: true,
				spaceBetween: 10,
				//slidesPerView: "auto",
				freeMode: true,
				watchSlidesProgress: true,
				autoplay: {
				   delay: 1500,
				},
			});
			var swiper2 = new Swiper(".main-swiper", {
				loop: true,
				effect: "fade",
				speed: 1000,
				parallax: true,
				autoplay: {
				   delay: 1500,
				},
				pagination: {
					el: ".swiper-pagination-five",
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
					},
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		}
	}
	
	// kanbern Swiper ==
	var handlekanbernSwiper = function() {	
		if(jQuery('.kanbern-bnr').length > 0){
			var swiperTestimonial = new Swiper('.kanbern-bnr', {
				loop: true,
				spaceBetween: 10,
				slidesPerView: "auto",
				effect: "fade",
				parallax: true,
				speed: 1500,
				autoplay: {
				   delay: 2000,
				},
			});
		}
	}
	
	// Blog slideshow Swiper ==
	var BlogSlideshowSwiper = function() {	
		if(jQuery('.blog-slideshow').length > 0){
			var swiperTestimonial = new Swiper('.blog-slideshow', {
				loop: true,
				spaceBetween: 0,
				slidesPerView: "auto",
				speed: 1500,
				autoplay: {
				   delay: 2000,
				},
				pagination: {
				  el: ".swiper-pagination-two",
				  clickable: true,
				},
			});
		}
	}
	
	// Project Carousel Swiper ==
	var handleProjectCarousel = function() {	
		if(jQuery('.project-carousel').length > 0){
			var swiperBook = new Swiper('.project-carousel', {
				loop:true,
				centeredSlides: true,
				spaceBetween:30,
				slidesPerView: 1.5,
				autoplay: {
					delay: 4000,
				},
				navigation: {
					nextEl: ".portfolio-button-next",
					prevEl: ".portfolio-button-prev",
				},
				breakpoints: {
					300: {
						slidesPerView: 1,
					},
					600: {
						slidesPerView: 1,
					},
					767: {
						slidesPerView: 2,
					},
					991: {
						slidesPerView: 1.5,
					},
					1600: {
						slidesPerView:1.5,
					},
				}
			});
		}	
	}
	
	// Swiper Four ==
	var handleSwiperFour = function() {	
		if(jQuery('.swiper-four').length > 0){
			var swiper = new Swiper( '.swiper-four', {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 2500,
				},
				navigation: {
					nextEl: ".tranding-button-next",
					prevEl: ".tranding-button-prev",
				},	
				breakpoints: {
					1200: {
						slidesPerView: 4,
					},
					1024: {
						slidesPerView: 4,
					},
					991: {
						slidesPerView: 3,
					},
					591: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					340: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
				}
			});
		}
	}
	
	//  Swiper Five ==
	var handleSwiperFive = function() {	
		if(jQuery('.swiper-five').length > 0){
			var swiper = new Swiper( '.swiper-five', {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: true,
				autoplay: {
					delay: 2500,
				},
				pagination: {
				  el: ".swiper-pagination-two",
				  clickable: true,
				},
				navigation: {
				  nextEl: ".about-button-next",
				  prevEl: ".about-button-prev",
				},
				breakpoints: {
					1600: {
						slidesPerView: 1,
					},
				}
			} );
		}
	}

	//  Swiper Blog Post ==
	var handleSwiperBlogPost = function() {	
		if(jQuery('.swiper-blog-post').length > 0){
			var swiper = new Swiper( '.swiper-blog-post', {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: ".swiper-pagination-trading",
				},
				autoplay: {
					delay: 2000,
				},
				breakpoints: {
					1200: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 1.5,
						spaceBetween: 15,
						centeredSlides: true,
					},
					575: {
						slidesPerView: 1.5,
						spaceBetween: 15,
						centeredSlides: true,
					},
					300: {
						slidesPerView: 1.2,
						spaceBetween: 15,
					},
					
				}
			});
		}
	}
	
	//  handle Category Swiper ==
	var handleCategorySwiper = function() {	
		if(jQuery('.category-swiper').length > 0){
			var swiper = new Swiper( '.category-swiper', {
				slidesPerView: 7,
				centeredSlides: false,
				spaceBetween: 20,
				loop: true,
					pagination: {
					el: ".swiper-pagination-two",
				},
				autoplay: {
					delay: 3000,
				},
				navigation: {
					nextEl: ".tranding-button-next", 
					prevEl: ".tranding-button-prev",
				},	
				breakpoints: {
					1600: {
						slidesPerView: 7,
					},
					1200: {
						slidesPerView: 5,
					},
					991: {
						slidesPerView: 4,
					},
					591: {
						slidesPerView: 3, 	
					},
					320: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
				}
			});
		}
	}
	
	//  handle Category Swiper2 ==
	var handleCategorySwiper2 = function() {	
		if(jQuery('.category-swiper2').length > 0){
			var swiper = new Swiper( '.category-swiper2', {
				slidesPerView: 6,
				centeredSlides: false,
				spaceBetween: 20,
				loop: true,
				/* pagination: {
					el: ".swiper-pagination-two",
				}, */
				autoplay: {
					delay: 3000,
				},
				navigation: {
					nextEl: ".tranding-button-next", 
					prevEl: ".tranding-button-prev",
				},	
				breakpoints: {
					1600: {
						slidesPerView: 6,
						spaceBetween: 40,
					},
					1200: {
						slidesPerView: 6,
						spaceBetween: 20,
					},
					991: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					575: {
						slidesPerView: 3, 	
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
				}
			});
		}
	}
	
	//  Product Swiper ==
	var handleSwiperProduct = function() {	
		if(jQuery('.swiper-product').length > 0){
			var swiper = new Swiper( '.swiper-product', {
				slidesPerView: 4,
				spaceBetween: 15,
				loop: true,
				pagination: {
					el: ".swiper-pagination-trading",
				},
				autoplay: {
					delay: 2000,
				},
				breakpoints: {
					1200: {
						slidesPerView: 4,
					},
					991: {
						slidesPerView: 3,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1.5,
					},
					340: {
						slidesPerView: 1,
						centeredSlides: true,
					},
				}
			});
		}
	}
	
	//  Product Gallery Swiper1 ==
	var ProductGallerySwiper1 = function() {	
		if(jQuery('.product-gallery-swiper').length > 0){
			var swiper = new Swiper(".product-gallery-swiper", {
				spaceBetween: 15,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesProgress: true,
				pagination: {
					el: ".swiper-pagination-trading",
				},
			});
			var swiper2 = new Swiper(".product-gallery-swiper2", {
				spaceBetween: 0,
				updateOnWindowResize: true,
				autoplay: {
					delay: 1500,
				},			  
				navigation: {
					nextEl: ".gallery-button-next",
					prevEl: ".gallery-button-prev",
				},
				thumbs: {
					swiper: swiper,
				},
			});
		}
	}
	
	//  Quick View Modal Swiper ==
	var handleQuickModal = function() {	
		if(jQuery('.quick-modal-swiper').length > 0){
			var swiper = new Swiper(".quick-modal-swiper", {
			  spaceBetween: 15,
			  slidesPerView: 4,
			  freeMode: true,
			  watchSlidesProgress: true,
			});
			var swiper2 = new Swiper(".quick-modal-swiper2", {
				spaceBetween: 0,
				updateOnWindowResize: true,	
				navigation: {
					nextEl: ".gallery-button-next",
					prevEl: ".gallery-button-prev",
				},
				thumbs: {
					swiper: swiper,
				},
			});
		}
	}
	
	//  Product Gallery Swiper ==
	var handleProductGallery = function() {	
		if(jQuery('.product-gallery').length > 0){
			var swiper = new Swiper(".product-thumb", {
				slidesPerView: "2",
				spaceBetween: 0,
				grid: {
					rows: 2,
				},
				autoplay: {
					delay: 1500,
				},
				pagination: {
					el: ".product-swiper-pagination",
					clickable: true,
					renderBullet: function (index, className) {
					  return '<span class="' + className + '">0' + (index + 1) + "</span>";
					},
				},
				breakpoints: {
					
					576: {
						slidesPerView: 2,
					},
					300: {
						slidesPerView: 1,
					},
				}
			});
			var swiper2 = new Swiper(".product-gallery", {
				slidesPerView: "1",
				
				thumbs: {
				  swiper: swiper,
				},
			});
		}
	}
	
	//  Portfolio Gallery Swiper1 ==
	var handlePortfolioGallery = function() {	
		if(jQuery('.portfolio-gallery').length > 0){
			var swiper = new Swiper(".portfolio-thumb", {
				slidesPerView: "auto",
				spaceBetween: 0,
				
			});
			var swiper2 = new Swiper(".portfolio-gallery", {
				slidesPerView: "1",
				
				thumbs: {
				  swiper: swiper,
				},
			});
		}
	}
	
	//  Portfolio Gallery Swiper2 ==
	var handlePortfolioGallery2 = function() {	
		if(jQuery('.portfolio-gallery2').length > 0){
			var swiper = new Swiper( '.portfolio-gallery2', {
				slidesPerView: "auto",
				spaceBetween: 30,
				
				loop: true,
				autoplay: {
					delay: 2500,
				},
				pagination: {
					el: ".swiper-pagination-two",
				},
				navigation: {
					nextEl: ".portfolio-button-next",
					prevEl: ".portfolio-button-prev",
				},
				breakpoints: {
					1200: {
						slidesPerView: "auto",
					},
					576: {
						slidesPerView: "auto",
					},
					300: {
						slidesPerView: 1,
					},
				}
			} ); 
		}
	}
	
	//  Portfolio Gallery Swiper3 ==
	var handlePortfolioGallery3 = function() {	
		if(jQuery('.portfolio-gallery3').length > 0){
			var swiper = new Swiper( '.portfolio-gallery3', {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 2500,
				},
				pagination: {
					el: ".swiper-pagination-two",
				},
				navigation: {
					nextEl: ".portfolio-button-next",
					prevEl: ".portfolio-button-prev",
				},
				breakpoints: {
					1200: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 2,
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					300: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
				}
			} ); 
		}
	}
	
	// Split Swiper ==
	var handleSplitSwiper = function() {	
		if(jQuery('.spilt-swiper-slider').length > 0){
			var spiltSwiper = new Swiper('.spilt-swiper-slider', {
				direction: "vertical",
				loop: true,
				slidesPerView: 1,
				mousewheel: true,
				paginationClickable: true,
				autoplay: {
					delay: 1500,
				},
				pagination: {
					el: ".swiper-pagination-two",
				},
				grabCursor: true,
				speed: 1000,
				parallax: true,
				effect: "slide",
				mousewheelControl: 1,
			});
		}
	}
	
	/* Function ============ */
	return {
	
		init:function(){
		},

		load:function(){
			handleMainSwiper();
			handlekanbernSwiper();
			BlogSlideshowSwiper();
			handleProjectCarousel();
			handleSwiperFour();
			handleSwiperFive();
			handleSwiperBlogPost();
			handleCategorySwiper();
			handleCategorySwiper2();
			handleSwiperProduct();
			ProductGallerySwiper1();
			handleProductGallery();
			handlePortfolioGallery();
			handlePortfolioGallery2();
			handlePortfolioGallery3();
			handleSplitSwiper();
			handleQuickModal();
		},
		
		resize:function(){
			ProductGallerySwiper1();
		}
	}
	
}();


/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	
	MoonCartCarousel.init();
	
	
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	MoonCartCarousel.load();

	
});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	MoonCartCarousel.resize();
});
/*  Window Resize END */