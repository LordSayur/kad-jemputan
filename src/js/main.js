import p5 from 'p5/lib/p5.min.js';

let s = (sk) => {
	let flower;
	sk.preload = () => {
		flower = sk.loadImage('../assets/bunga.png');
	};
	sk.setup = () => {
		addAnimateCss();
		sk.createCanvas(window.innerWidth, document.documentElement.scrollHeight);
		sk.background(40);
	};

	sk.draw = () => {
		sk.background(40);
		sk.image(flower, sk.mouseX - 25, sk.mouseY - 25, 50, 50);
	};
};

const P5 = new p5(s, 'draw');

const addAnimateCss = () => {
	const border = document.querySelector('#welcomeBorder');
	const omar = document.querySelector('#Omar');
	const and = document.querySelector('#and');
	const amirah = document.querySelector('#Amirah');
	const welcomeNote = document.querySelector('#welcomeNote');
	const hajat = document.querySelector('#hajat');

	document.querySelector('#kad').classList.remove('hide');

	border.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
	omar.classList.add('animate__animated', 'animate__backInLeft', 'animate__delay-2s');
	and.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
	amirah.classList.add('animate__animated', 'animate__backInRight', 'animate__delay-2s');
	welcomeNote.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-4s');
	hajat.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-4s');
};

import '../scss/main.scss';
