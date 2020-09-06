import '../scss/main.scss';
import p5 from 'p5/lib/p5.min.js';

let s = (sk) => {
	let flower;
	sk.preload = () => {
		flower = sk.loadImage('../assets/bunga.png');
	};
	sk.setup = () => {
		sk.createCanvas(window.innerWidth, document.documentElement.scrollHeight);
		sk.background(40);
	};

	sk.draw = () => {
		sk.background(40);
		sk.image(flower, sk.mouseX - 25, sk.mouseY - 25, 50, 50);
	};
};

const P5 = new p5(s, 'draw');
