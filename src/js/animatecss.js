export default () => {
	welcomeElements.forEach((element) => {
		addAnimateCssClass(element.name, element.animation, element.delay, element.speed);
	});

	document.querySelector('#kad').classList.remove('cover');

	window.addEventListener('scroll', function(event) {
		lowerElements.forEach((element) => {
			if (isInViewport(document.querySelector(element.name))) {
				addAnimateCssClass(element.name, element.animation, element.delay, element.speed);
			}
		});
	});
};

const speedSlow = 'animate__slow';
const delay2 = 'animate__delay-2s';
const delay4 = 'animate__delay-4s';

const addAnimateCssClass = (element, animation, delay, speed) => {
	let el = document.querySelector(element).classList;
	el.add('animate__animated', animation, delay, speed);
	el.remove('hide-behind');
};

const welcomeElements = [
	{ name: '.border', animation: 'animate__fadeIn', delay: delay2, speed: speedSlow },
	{ name: '#Omar', animation: 'animate__fadeInRight', delay: delay2, speed: speedSlow },
	{ name: '#and', animation: 'animate__fadeIn', delay: delay2, speed: speedSlow },
	{ name: '#Amirah', animation: 'animate__fadeInLeft', delay: delay2, speed: speedSlow },
	{ name: '#hajat-title', animation: 'animate__fadeIn', delay: delay4, speed: speedSlow },
	{ name: '#hajat', animation: 'animate__fadeInUp', delay: delay4, speed: speedSlow }
];

const lowerElements = [
	{ name: '#omar-amirah-2', animation: 'animate__fadeIn', delay: delay2, speed: speedSlow },
	{ name: '#waktu-tempat', animation: 'animate__fadeInRight', delay: delay2, speed: speedSlow },
	{ name: '#tentative', animation: 'animate__fadeIn', delay: delay2, speed: speedSlow },
	{ name: '#doa', animation: 'animate__fadeInLeft', delay: delay2, speed: speedSlow },
	{ name: '#ads', animation: 'animate__fadeIn' }
];

let isInViewport = function(elem) {
	let bounding = elem.getBoundingClientRect();
	return bounding.top >= 0 && bounding.top - 100 <= (window.innerHeight || document.documentElement.clientHeight);
};
