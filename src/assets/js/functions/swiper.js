// import Swiper JS
import Swiper from 'swiper'
import {Navigation} from 'swiper/modules'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import Swiper and modules styles

const swiper = new Swiper('.products-swiper', {
	direction: 'horizontal',
	spaceBetween: 20,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		540: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 1,
		},
		920: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},

	// Modules
	modules: [Navigation],

	// Navigation arrows
	navigation: {
		nextEl: '.product-next-btn',
		prevEl: '.product-prev-btn',
	},
})
