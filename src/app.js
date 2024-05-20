import { gsap } from "gsap";
const img = document.querySelector("img");
const imgSize = img.getBoundingClientRect();
const c = document.getElementById("canvas");
c.width = imgSize.width;
c.height = imgSize.height;
const ctx = c.getContext("2d");

// Turn of image smoothing to get pixalted effect
ctx.imageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;

const blocks = {
	amount: 1,
};

function pixalite() {
	requestAnimationFrame(pixalite);
	const size = blocks.amount * 0.01;

	const w = c.width * size;
	const h = c.height * size;
	ctx.drawImage(img, 0, 0, w, h);

	ctx.drawImage(c, 0, 0, w, h, 0, 0, c.width, c.height);
}
pixalite();

gsap.to(blocks, {
	amount: 100,
	delay: 2,
	ease: "steps(5)",
	duration: 6,
	repeat: -1,
	yoyo: true,
});