import React, { useEffect } from "react";
import seyi from "../../assets/seyi.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
	const controlsH4 = useAnimation();
	const controlsP = useAnimation();
	const controlsImg = useAnimation();
	const controlsDiv = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.5 });

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
		} else {
			controlsImg.start("hidden");
			controlsDiv.start("hidden");
			controlsH4.start("hidden");
			controlsP.start("hidden");
			// controlsImg.set("hidden");
		}
	}, [inView, controlsDiv, controlsH4, controlsP, controlsImg]);

	return (
		<section
			id="about"
			ref={ref}
			className="bg-lightblue dark:bg-blue w-full flex items-center justify-between pl-[100px] pt-[100px]">
			<div className="w-[600px] font-grotta flex flex-col gap-y-[15px]">
				<motion.h1
					variants={variantsH4}
					initial="hidden"
					animate={controlsH4}
					transition={{ duration: 1, delay: 0.2 }}
					className="text-green-2 dark:text-green-1 text-[45px] font-medium">
					I'm Oluwaseyi Peters
				</motion.h1>
				<motion.p
					variants={variantsP}
					initial="hidden"
					animate={controlsP}
					transition={{ duration: 1, delay: 0.4 }}
					className="text-blue dark:text-white font-light">
					My growth as a Frontend Engineer has been extremely wavy, but I’ve
					seen more crests than troughs. Your friendly neighborhood frontend
					developer, UX architect, and JavaScript engineer. I spend my days (and
					often nights) painting the Internet canvas with PROJECTS and lines of
					code, turning zeroes and ones into immersive, interactive experiences,
				</motion.p>
				<motion.div
					variants={variantsP}
					initial="hidden"
					animate={controlsP}
					transition={{ duration: 1, delay: 0.6 }}>
					<button
						onClick={() => {
							window.open("https://linkedin.com/in/theseyipeters");
						}}
						className="flex gap-x-[5px] items-center text-green-2 dark:text-green-1 font-medium py-2 hover:underline">
						LinkedIn{" "}
						<svg
							width="14"
							height="14"
							viewBox="0 0 19 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0.623789 16.2484C0.474642 16.0541 0.408807 15.8084 0.440767 15.5656C0.472727 15.3227 0.599865 15.1024 0.79421 14.9533L15.1466 3.9388L5.7009 2.69671C5.58057 2.68087 5.46454 2.64149 5.35942 2.58082C5.25431 2.52014 5.16218 2.43935 5.08829 2.34307C5.0144 2.24679 4.9602 2.13689 4.92877 2.01966C4.89735 1.90243 4.88933 1.78016 4.90517 1.65982C4.921 1.53949 4.96038 1.42346 5.02106 1.31835C5.08174 1.21323 5.16252 1.1211 5.25881 1.04721C5.35509 0.973319 5.46498 0.919117 5.58222 0.887697C5.69945 0.856276 5.82172 0.848253 5.94205 0.864087L17.5983 2.39788C17.7186 2.41365 17.8347 2.45299 17.9399 2.51365C18.045 2.5743 18.1372 2.65509 18.2111 2.75139C18.285 2.84769 18.3392 2.95761 18.3706 3.07487C18.402 3.19213 18.4099 3.31442 18.394 3.43476L16.8602 15.091C16.8283 15.334 16.701 15.5544 16.5066 15.7036C16.3121 15.8528 16.0664 15.9187 15.8233 15.8867C15.5803 15.8548 15.36 15.7275 15.2107 15.5331C15.0615 15.3386 14.9956 15.0929 15.0276 14.8499L16.2713 5.40436L1.91893 16.4188C1.72458 16.568 1.47895 16.6338 1.23606 16.6019C0.993176 16.5699 0.772935 16.4428 0.623789 16.2484Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</motion.div>
			</div>
			<div>
				<motion.img
					src={seyi}
					alt=""
					variants={variantsImg}
					initial="hidden"
					animate={controlsImg}
					transition={{ duration: 1, delay: 0.8 }}
				/>
			</div>
		</section>
	);
};

export default About;
