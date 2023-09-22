import {animate} from 'motion'

export const animateTitle = () => {
	animate(
		'[data-title-animate]',
		{y: [-40, 0], opacity: [0, 1]},
		{duration: 0.6}
	)
}

export const leftToRight = (items, duration = 1, delay = 0) => {
	animate(
		items,
		{x: [-50, 0], opacity: [0, 1]},
		{duration: duration, delay: delay}
	)
}

export const animateButtons = () => {
	animate(
		'.hero__buttons',
		{y: [50, 0], opacity: [0, 1]},
		{duration: 0.6, delay: 0.6}
	)
}

export const animateCircle = (items, duration = 1, delay = 0) => {
	animate(
		items,
		{clipPath: ['circle(0%)', 'circle(100%)']},
		{duration: duration, delay: delay}
	)
}
