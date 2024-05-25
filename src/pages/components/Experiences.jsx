import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sma from "../../assets/sma.svg";
import sma2 from "../../assets/sma2.svg";
import alt from "../../assets/alt.svg";
import alt2 from "../../assets/alt2.svg";
import ndz from "../../assets/ndz.svg";
import genesys from "../../assets/genesys.svg";
import genesys2 from "../../assets/genesys2.svg";
import txe from "../../assets/txe.svg";

const Experiences = ({ isDarkMode }) => {
	const images = [sma, genesys, ndz, alt, txe];
	const imagess = [sma2, genesys2, ndz, alt2, txe];

	const controlsH4 = useAnimation();
	const controlsP = useAnimation();
	const controlsImg = useAnimation();
	const controlsDiv = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.3 });

	const variantsDiv = {
		hidden: { opacity: 0, y: -100 },
		visible: { opacity: 1, y: 0 },
	};

	const variantsH4 = {
		hidden: { opacity: 0, y: 50, duration: 1000 },
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
			controlsDiv.start("hidden");
			controlsH4.start("hidden");
			controlsP.start("hidden");
			controlsImg.start("hidden");
		}
	}, [inView, controlsDiv, controlsH4, controlsP, controlsImg]);

	return (
		<section
			id="experience"
			ref={ref}
			className="bg-lightorange dark:bg-black py-[80px] md:py-[120px] lg:py-[140px] flex flex-col items-center justify-center px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
			<div className="w-full md:w-full lg:w-4/5 xl:w-3/5 text-blue dark:text-white font-grotta font-light text-justify md:text-center lg:text-center flex flex-col gap-y-[24px]">
				<motion.h1
					variants={variantsH4}
					initial="hidden"
					animate={controlsH4}
					transition={{ duration: 1, delay: 0.2 }}
					className="text-blue dark:text-green-1 text-[30px] md:text-[35px] lg:text-[40px] font-medium text-center leading-[30px] md:leading-[37px] lg:leading-[40px]">
					{" "}
					I've embraced versatility and left my mark across diverse companies.
				</motion.h1>
				<motion.p
					variants={variantsP}
					initial="hidden"
					animate={controlsP}
					transition={{ duration: 1, delay: 0.4 }}>
					From the art of crafting intricate designs to the precision of
					perfecting user interfaces, I've immersed myself in the ever-evolving
					realm of frontend development. My path has been paved with
					collaboration, working hand-in-hand with stakeholders, designers, and
					fellow developers to transform ideas into reality and consistently
					exceed expectations.
				</motion.p>
				<motion.p
					variants={variantsP}
					initial="hidden"
					animate={controlsP}
					transition={{ duration: 1, delay: 0.6 }}>
					My experiences span the spectrum from nimble startups and innovative
					agencies to well-established enterprises. Throughout this journey,
					I've mastered HTML, CSS, JavaScript, and beyond, shaping seamless and
					captivating user experiences. Be it designing fluid, responsive
					layouts, weaving in interactive elements, or fine-tuning for optimal
					performance, I relish the challenge of pushing the envelope and
					delivering results that truly make an impact.
				</motion.p>
			</div>

			{isDarkMode ? (
				<div className="flex flex-col md:flex-col lg:flex-row w-full gap-x-[70px] gap-y-[30px] justify-center items-center mt-[50px]">
					{images.map((image, idx) => (
						<div className="w-full h-full flex items-center justify-center">
							<motion.img
								key={idx}
								src={image}
								alt={`image-${idx}`}
								initial="hidden"
								animate={controlsP}
								variants={{
									hidden: { opacity: 0, y: 50 },
									visible: {
										opacity: 1,
										y: 0,
										transition: { duration: 1, delay: 0.5 },
									},
								}}
							/>
						</div>
					))}
				</div>
			) : (
				<div className="flex flex-col md:flex-col lg:flex-row w-full gap-x-[70px] gap-y-[30px] justify-center items-center mt-[50px]">
					{imagess.map((image, idx) => (
						<div className="w-full h-full flex items-center justify-center">
							<motion.img
								key={idx}
								src={image}
								alt={`image-${idx}`}
								initial="hidden"
								animate={controlsP}
								variants={{
									hidden: { opacity: 0, y: 50 },
									visible: {
										opacity: 1,
										y: 0,
										transition: { duration: 1, delay: 0.5 },
									},
								}}
							/>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Experiences;
