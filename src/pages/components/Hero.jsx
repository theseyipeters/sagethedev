import React, { useState, useEffect, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import QRCode from "qrcode.react";
import { motion, useAnimation } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useTransition, useSpring, animated } from "react-spring";
import Sagethedev from "../../svgs/Sagethedev";

const Hero = () => {
	const [whatsappURL, setWhatsappURL] = useState("https://wa.me/2348038564918");

	const controlsH4 = useAnimation();
	const controlsP = useAnimation();
	const controlsImg = useAnimation();
	const controlsDiv = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.5 });
	// const [animationStarted, setAnimationStarted] = useState(false);

	const variantsDiv = {
		hidden: { opacity: 0, y: -100 },
		visible: { opacity: 1, y: 0 },
	};

	const variantsH4 = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const variantsP = {
		hidden: { opacity: 0, y: 80 },
		visible: { opacity: 1, y: 0 },
	};
	const variantsImg = {
		hidden: { opacity: 0, x: -80 },
		visible: { opacity: 1, x: 0 },
	};

	useEffect(() => {
		if (inView) {
			controlsDiv.start("visible");
			controlsH4.start("visible");
			controlsP.start("visible");
			controlsImg.start("visible");
			// setAnimationStarted(true);
		} else {
			controlsDiv.start("hidden");
			controlsH4.start("hidden");
			controlsP.start("hidden");
			controlsImg.start("hidden");
		}
	}, [inView, controlsDiv, controlsH4, controlsP, controlsImg]);

	useEffect(() => {
		const interval = setInterval(() => {
			// Generate a new URL or identifier here
			// For simplicity, let's assume we're just adding a timestamp
			const newURL = "https://wa.me/2348038564918?timestamp=" + Date.now();
			setWhatsappURL(newURL);
		}, 30000); // Update every 30 seconds

		return () => clearInterval(interval);
	}, []);

	const textVariations = [
		"Web Applications",
		"Web Interfaces",
		"Web Experiences",
		"for Everyone",
	];
	const [roles] = useTypewriter({
		words: textVariations,

		loop: {},
		typeSpeed: 100,
		deleteSpeed: 30,
		delaySpeed: 2000,
	});
	return (
		<section
			id="hero"
			ref={ref}
			className="flex flex-col items-center pt-[50px] gap-y-[20px]">
			<motion.div
				variants={variantsDiv}
				initial="hidden"
				animate={controlsDiv}
				transition={{ duration: 1, delay: 0.5 }}>
				<Sagethedev />
			</motion.div>

			<div>
				<motion.h3
					variants={variantsDiv}
					initial="hidden"
					animate={controlsDiv}
					transition={{ duration: 1, delay: 0.2 }}
					className="text-green font-grotta text-[30px] font-medium tracking-[-2px]">
					I build{" "}
					<span className="bg-green rounded-md text-blue py-2 px-2">
						{roles}
					</span>
				</motion.h3>
			</div>
			<motion.div
				variants={variantsDiv}
				initial="hidden"
				animate={controlsDiv}
				className="mt-1 p-5 bg-[#f0eeee] rounded-lg"
				transition={{ duration: 1 }}>
				<QRCode
					bgColor="#fefefe"
					value={whatsappURL}
					size={180}
				/>
			</motion.div>
		</section>
	);
};

export default Hero;
