import React from "react";
import Opinion from "./Opinion";

const Unfiltered = () => {
	return (
		<section className=" h-fit overflow-hidden  fixed relative">
			<div>
				<div className="absolute top-[4%] z-10">
					<svg
						width="1440"
						height="359"
						viewBox="0 0 1440 359"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_f_1846_1257)">
							<rect
								width="1440"
								height="287"
								transform="translate(0 -26)"
								fill="#040D12"
							/>
						</g>
						<defs>
							<filter
								id="filter0_f_1846_1257"
								x="-97.3"
								y="-123.3"
								width="1634.6"
								height="481.6"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB">
								<feFlood
									flood-opacity="0"
									result="BackgroundImageFix"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="48.65"
									result="effect1_foregroundBlur_1846_1257"
								/>
							</filter>
						</defs>
					</svg>
				</div>

				<div className="flex items-center justify-between px-[100px] py-[50px] sticky z-20">
					<div className="w-[600px] font-grotta text-white font-light">
						<h1 className="text-green text-[45px] font-medium">
							Unfiltered opinions about me
						</h1>
						<p>
							I believe in transparency and authenticity, which is why I'm
							proudly showcasing unedited testimonials to provide you with a
							real insight into what it's like to collaborate with me.{" "}
						</p>
					</div>

					<button className="font-grotta font-light text-green border border-green py-[12px] px-[20px] rounded-full">
						Enter your opinion
					</button>
				</div>
			</div>

			<div className="pt-[100px] pb-[150px] h-[800px] flex flex-col gap-y-[40px] overflow-scroll">
				<Opinion
					firstName="Eliezer"
					lastName={"AJAH"}
					position="CEO"
					company="XYZ Corp"
					comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
					profileImg="url_to_profile_image.jpg"
					isClient={false}
				/>
				<Opinion
					firstName="Eliezer"
					lastName={"AJAH"}
					position="CEO"
					company="XYZ Corp"
					comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
					profileImg="url_to_profile_image.jpg"
					isClient={false}
				/>
				<Opinion
					firstName="Eliezer"
					lastName={"AJAH"}
					position="CEO"
					company="XYZ Corp"
					comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
					profileImg="url_to_profile_image.jpg"
					isClient={false}
				/>
				<Opinion
					firstName="Eliezer"
					lastName={"AJAH"}
					position="CEO"
					company="XYZ Corp"
					comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
					profileImg="url_to_profile_image.jpg"
					isClient={false}
				/>
			</div>

			<div className="absolute bottom-[-7%] z-10">
				<svg
					width="1440"
					height="323"
					viewBox="0 0 1440 323"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_f_1846_1258)">
						<rect
							width="1440"
							height="247"
							transform="matrix(-1 0 0 -1 1440 345)"
							fill="#040D12"
						/>
					</g>
					<defs>
						<filter
							id="filter0_f_1846_1258"
							x="-97.3"
							y="0.699997"
							width="1634.6"
							height="441.6"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB">
							<feFlood
								flood-opacity="0"
								result="BackgroundImageFix"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation="48.65"
								result="effect1_foregroundBlur_1846_1258"
							/>
						</filter>
					</defs>
				</svg>
			</div>
		</section>
	);
};

export default Unfiltered;
