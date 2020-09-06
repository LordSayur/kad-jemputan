import '../scss/main.scss';
import p5 from 'p5/lib/p5.min.js';

let s = (sk) => {
	sk.setup = () => {
		sk.createCanvas(window.innerWidth, document.documentElement.scrollHeight);
		sk.background(40);
	};

	sk.draw = () => {
		sk.background(40);
		sk.ellipse(sk.mouseX, sk.mouseY, 50);
	};
};

const P5 = new p5(s, 'draw');
