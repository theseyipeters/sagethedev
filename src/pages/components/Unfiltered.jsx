import React, { useEffect, useRef, useState } from "react";
import Opinion from "./Opinion";
import eli from "../../assets/eli.svg";
import wale from "../../assets/wale.svg";
import micah from "../../assets/micah.svg";
import arnold from "../../assets/arnold.svg";
import DarkBlur from "../../svgs/DarkBlur";
import LightBlur from "../../svgs/LightBlur";
import DarkBlur2 from "../../svgs/DarkBlur2";
import LightBlur2 from "../../svgs/LightBlur2";
import Opinion2 from "./Opinion2";

const Unfiltered = ({ isDarkMode }) => {
	return (
		<section className=" h-fit overflow-hidden relative">
			<div>
				<div className="hidden lg:block absolute right-[-45%] top-0 z-10 rotate-90">
					{isDarkMode ? <DarkBlur /> : <LightBlur />}
				</div>

				<div className="w-full  flex flex-col gap-[20px] md:flex-col lg:flex-row items-start lg:items-center justify-between px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px] py-[50px] sticky z-20">
					<div className="flex flex-col gap-[10px] w-full md:w-full lg:w-[600px]  text-blue dark:text-white font-light">
						<h1 className="text-green-2 dark:text-green-1 text-[25px] md:text-[35px] lg:text-[45px] font-medium">
							Unfiltered opinions about me
						</h1>
						<p className="text-sm md:text-base lg:text-lg">
							I believe in transparency and authenticity, which is why I'm
							proudly showcasing unedited testimonials to provide you with a
							real insight into what it's like to collaborate with me.{" "}
						</p>
					</div>
				</div>
			</div>

			<div className="hidden lg:block">
				<div className=" pt-[100px] pb-[150px] h-[500px] flex flex-row gap-y-[40px]">
					<div className="opinion-container">
						<Opinion
							isDarkMode={isDarkMode}
							firstName="Eliezer"
							lastName={"AJAH"}
							position="Head, Talent Development and Outsourcing"
							company="Genesys Tech Hub"
							comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
							profileImg={eli}
							isClient={true}
						/>
						<Opinion
							// isDarkMode={isDarkMode}
							firstName="Olawale"
							lastName={"AJIBOYE"}
							position="Scrum Master"
							company="Nigeria Inter-Bank Settlement Systems PLC"
							comment="Seyi is a standout frontend engineer whose work speaks for itself. His ability to craft beautiful and functional user interfaces is impressive. He is efficient, responsive, and consistently exceeds expectations. An exceptional engineer!"
							profileImg={wale}
							isClient={true}
						/>
						<Opinion
							isDarkMode={isDarkMode}
							firstName="Micah"
							lastName={"TIMILEYIN"}
							position="Program Manager"
							company="Alt School Africa"
							comment={
								"I had the opportunity of working with Seyi during a training program and one thing I can attest to is that Seyi wants to learn from the process he wants to see how the already good work can be better and I think this is a very valuable attribute for a great professional in the 21st century."
							}
							profileImg={micah}
							isClient={true}
						/>
						<Opinion
							isDarkMode={isDarkMode}
							firstName="Arnold"
							lastName={"NGOWI"}
							position="Sr. Software Engineer"
							company="GTCO - Dar es Salaam, Tanzania"
							comment={
								"Seyi's expertise and dedication is evident as he contributed significantly to our project's success. His effective communication and teamwork were crucial in meeting our goals. Seyi Peters is a highly skilled, dependable, and collaborative developer who would be an asset to any team."
							}
							profileImg={arnold}
							isClient={true}
						/>
					</div>
				</div>
			</div>
			<div className="lg:hidden">
				<div className="pt-[10px] pb-[10px] px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px] h-fit flex flex-col gap-y-[40px] overflow-scroll">
					<div className="opinion-container2 flex flex-col gap-10 h-fit mt-[50px] overflow-scroll">
						<Opinion2
							isDarkMode={isDarkMode}
							firstName="Eliezer"
							lastName={"AJAH"}
							position="Head, Talent Development and Outsourcing"
							company="Genesys Tech Hub"
							comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
							profileImg={eli}
							isClient={false}
						/>
						<Opinion2
							// isDarkMode={isDarkMode}
							firstName="Olawale"
							lastName={"AJIBOYE"}
							position="Scrum Master"
							company="Nigeria Inter-Bank Settlement Systems PLC"
							comment="Seyi is a standout frontend engineer whose work speaks for itself. His ability to craft beautiful and functional user interfaces is impressive. He is efficient, responsive, and consistently exceeds expectations. An exceptional engineer!"
							profileImg={wale}
							isClient={true}
						/>
						<Opinion2
							isDarkMode={isDarkMode}
							firstName="Micah"
							lastName={"TIMILEYIN"}
							position="Program Manager"
							company="Alt School Africa"
							comment={
								"I had the opportunity of working with Seyi during a training program and one thing I can attest to is that Seyi wants to learn from the process he wants to see how the already good work can be better and I think this is a very valuable attribute for a great professional in the 21st century."
							}
							profileImg={micah}
							isClient={true}
						/>

						<Opinion2
							isDarkMode={isDarkMode}
							firstName="Arnold"
							lastName={"NGOWI"}
							position="Sr. Software Engineer"
							company="GTCO - Dar es Salaam, Tanzania"
							comment={
								"Seyi's expertise and dedication were once again evident as he contributed significantly to the project's success. His effective communication and teamwork were crucial in meeting our goals. Seyi Peters is a highly skilled, dependable, and collaborative developer who would be an asset to any team."
							}
							profileImg={arnold}
							isClient={true}
						/>
					</div>
				</div>
			</div>

			<div className="hidden lg:block absolute left-[-45%] bottom-0 z-10 rotate-90">
				{isDarkMode ? <DarkBlur2 /> : <LightBlur2 />}
			</div>
		</section>
	);
};

export default Unfiltered;
