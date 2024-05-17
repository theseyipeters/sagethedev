import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sma from "../../assets/sma.svg";
import ndz from "../../assets/ndz.svg";
import genesys from "../../assets/genesys.svg";
import txe from "../../assets/txe.svg";

const Experiences = () => {
	const images = [sma, genesys, ndz, txe];
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
			className="bg-black px-[100px] py-[140px] flex flex-col items-center justify-center">
			<div className="w-3/5 text-white font-grotta font-light text-center flex flex-col gap-y-[24px]">
				<motion.h1
					variants={variantsH4}
					initial="hidden"
					animate={controlsH4}
					transition={{ duration: 1, delay: 0.2 }}
					className="text-green text-[40px] font-grotta font-medium leading-[40px]">
					{" "}
					I've embraced versatility and left my mark across diverse companies.
				</motion.h1>
				<motion.p
					variants={variantsP}
					initial="hidden"
					animate={controlsP}
					transition={{ duration: 1, delay: 0.4 }}>
					From meticulously crafting designs to fine-tuning user interfaces,
					I've delved deep into the dynamic world of frontend development. My
					journey has been one of collaboration, working closely with
					stakeholders, designers, and fellow developers to breathe life into
					visions and surpass expectations.
				</motion.p>
				<motion.p
					variants={variantsP}
					initial="hidden"
					animate={controlsP}
					transition={{ duration: 1, delay: 0.6 }}>
					Through engagements with startups, agencies, and established
					enterprises, I've honed my prowess in HTML, CSS, JavaScript, and
					beyond, delivering seamless and compelling user experiences. Whether
					it's constructing responsive layouts, integrating interactive
					elements, or optimizing for peak performance, I thrive on pushing
					boundaries and delivering impactful results.
				</motion.p>
			</div>
			<div className="flex w-full gap-x-[70px] justify-center items-center mt-[50px]">
				{images.map((image, index) => (
					<motion.img
						key={index}
						src={image}
						alt={`image-${index}`}
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
				))}
			</div>
		</section>
	);
};

export default Experiences;
