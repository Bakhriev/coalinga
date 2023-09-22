gsap.registerPlugin(ScrollTrigger)
gsap.fromTo('.header', {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 1})
gsap.fromTo(
	'.hero__title',
	{opacity: 0, x: -50},
	{opacity: 1, x: 0, duration: 1, delay: 0.6}
)
gsap.fromTo(
	'.hero__img',
	{opacity: 0, x: 50},
	{opacity: 1, x: 0, duration: 1, delay: 0.6}
)
gsap.fromTo(
	'.hero__form',
	{opacity: 0, y: 50},
	{opacity: 1, y: 0, duration: 1, delay: 1}
)
gsap.fromTo(
	'.hero__pill-cards .pill-card',
	{opacity: 0, x: 50},
	{opacity: 1, x: 0, duration: 1, delay: 1.2, stagger: 0.1}
)

gsap.fromTo(
	'.categories [data-animate]',
	{opacity: 0, x: 50},
	{
		opacity: 1,
		x: 0,
		duration: 1,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.categories',
			start: '10% bottom',
		},
	}
)

gsap.fromTo(
	'.about [data-animate]',
	{opacity: 0, x: 50},
	{
		opacity: 1,
		x: 0,
		duration: 1,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.about',
			start: '20% bottom',
		},
	}
)

gsap.fromTo(
	'.mentioned [data-animate]',
	{opacity: 0, x: 50},
	{
		opacity: 1,
		x: 0,
		duration: 1,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.mentioned',
			start: '20% bottom',
		},
	}
)

gsap.fromTo(
	'.article [data-animate-up]',
	{opacity: 0, y: 50},
	{
		opacity: 1,
		y: 0,
		duration: 1,
		stagger: 0.1,
	}
)

gsap.fromTo(
	'.news [data-animate]',
	{opacity: 0, x: 50},
	{
		opacity: 1,
		x: 0,
		duration: 1,
		stagger: 0.1,
		scrollTrigger: {
			trigger: '.news',
			start: '10% bottom',
		},
	}
)

const scrollTop = document.querySelector('.scroll-top')

scrollTop.addEventListener('click', () => {
	window.scrollTo(0, 0)
})

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollTop.classList.add('active')
	} else {
		scrollTop.classList.remove('active')
	}
})

const burgerMenu = () => {
	const burger = document.querySelector('.burger')
	const navigation = document.querySelector('.header__navigation')
	const overlay = document.querySelector('.overlay')
	const elements = [burger, navigation, overlay]
	const body = document.querySelector('body')

	const toggleActiveClass = () => {
		elements.forEach(element => element.classList.toggle('active'))
		body.classList.toggle('disable-scroll')
	}

	burger.addEventListener('click', toggleActiveClass)

	overlay.addEventListener('click', toggleActiveClass)

	window.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
			elements.forEach(element => element.classList.remove('active'))
			body.classList.remove('disable-scroll')
		}
	})
}

const dropdownInit = () => {
	const allDropdowns = document.querySelectorAll('[data-dropdown]')

	if (window.innerWidth > 992.98) {
		document.addEventListener('click', e => {
			let currentDropdown
			if (e.target.closest('[data-dropdown]')) {
				currentDropdown = e.target.closest('[data-dropdown]')
				currentDropdown.classList.toggle('active')
			}

			document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
				if (dropdown === currentDropdown) return
				dropdown.classList.remove('active')
			})
		})
	} else {
		allDropdowns.forEach(drp => {
			drp.addEventListener('click', () => {
				const subMenu = drp.querySelector('.dropdown__menu')
				if (!subMenu.style.maxHeight) {
					const allSubMenus = document.querySelectorAll('.dropdown__menu')
					allSubMenus.forEach(sub => {
						sub.style.maxHeight = ''
					})
					subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
				} else {
					subMenu.style.maxHeight = ''
				}
			})
		})
	}
}

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

	// Navigation arrows
	navigation: {
		nextEl: '.product-next-btn',
		prevEl: '.product-prev-btn',
	},
})

dropdownInit()
burgerMenu()
