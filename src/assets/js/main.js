import {swiper} from './functions/swiper'

import {burgerMenu} from './functions/burger'
import {dropdownInit} from './functions/dropdown'
import {animateCircle, leftToRight} from './functions/motion'
import {animate, stagger, inView} from 'motion'

burgerMenu()
dropdownInit()

animate(
	'.header--fixed',
	{y: [-50, 0], opacity: [0, 1]},
	{duration: 1, delay: 0.3}
)
animate('.hero__img', {y: [-50, 0], opacity: [0, 1]}, {duration: 1, delay: 0.6})
animate('.hero__title', {x: [-50, 0], opacity: [0, 1]}, {duration: 1, delay: 1})
animate('.hero__form', {y: [50, 0], opacity: [0, 1]}, {duration: 1, delay: 1.6})
animate(
	'.hero__pill-cards .pill-card',
	{x: [100, 0], opacity: [0, 1]},
	{duration: 1, delay: 1.6}
)

inView('.items-wrap [data-animate]', info => {
	animate(
		info.target,
		{x: [50, 0], opacity: [0, 1]},
		{delay: stagger(0.5), duration: 1}
	)
})

inView('.items-wrap [data-animate-up]', info => {
	animate(
		info.target,
		{y: [50, 0], opacity: [0, 1]},
		{delay: stagger(0.5), duration: 1}
	)
})

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
