import React from "react";
import Opinion from "./Opinion";
import eli from "../../assets/eli.svg";
import wale from "../../assets/wale.svg";
import DarkBlur from "../../svgs/DarkBlur";
import LightBlur from "../../svgs/LightBlur";
import DarkBlur2 from "../../svgs/DarkBlur2";
import LightBlur2 from "../../svgs/LightBlur2";
import Opinion2 from "./Opinion2";

const Unfiltered = ({ isDarkMode }) => {
	return (
		<section className=" h-fit overflow-hidden relative">
			<div>
				<div className="absolute top-[4%] z-10">
					{isDarkMode ? <DarkBlur /> : <LightBlur />}
				</div>

				<div className="w-full flex flex-col gap-[20px] md:flex-col lg:flex-row items-start lg:items-center justify-between px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px] py-[50px] sticky z-20">
					<div className="flex flex-col gap-[10px] w-full md:w-full lg:w-[600px] font-grotta text-blue dark:text-white font-light">
						<h1 className="text-green-2 dark:text-green-1 text-[25px] md:text-[35px] lg:text-[45px] font-medium">
							Unfiltered opinions about me
						</h1>
						<p>
							I believe in transparency and authenticity, which is why I'm
							proudly showcasing unedited testimonials to provide you with a
							real insight into what it's like to collaborate with me.{" "}
						</p>
					</div>

					<button className="font-grotta font-light text-green-2 dark:text-green-1 border border-green-2 dark:border-white py-[8px] px-[20px] rounded-full">
						Submit your opinion
					</button>
				</div>
			</div>

			<div className="hidden lg:block">
				<div className="pt-[100px] pb-[150px] h-[800px] flex flex-col gap-y-[40px] overflow-scroll">
					<Opinion
						isDarkMode={isDarkMode}
						firstName="Eliezer"
						lastName={"AJAH"}
						position="Head, Talent Development and Outsourcing"
						company="Genesys Tech Hub"
						comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
						profileImg={eli}
						isClient={false}
					/>
					<Opinion
						// isDarkMode={isDarkMode}
						firstName="Olawale"
						lastName={"AJIBOYE"}
						position="Scrum Master"
						company="Nigeria Inter-Bank Settlement Systems PLC"
						comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
						profileImg={wale}
						isClient={true}
					/>
					<Opinion
						// isDarkMode={isDarkMode}
						firstName="Eliezer"
						lastName={"AJAH"}
						position="CEO"
						company="XYZ Corp"
						comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
						profileImg={eli}
						isClient={false}
					/>
					<Opinion
						// isDarkMode={isDarkMode}
						firstName="Eliezer"
						lastName={"AJAH"}
						position="CEO"
						company="XYZ Corp"
						comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
						profileImg={wale}
						isClient={true}
					/>
				</div>
			</div>
			<div className="lg:hidden">
				<div className="pt-[100px] pb-[150px] px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px] h-[800px] flex flex-col gap-y-[40px] overflow-scroll">
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
						comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
						profileImg={wale}
						isClient={true}
					/>
					<Opinion2
						// isDarkMode={isDarkMode}
						firstName="Eliezer"
						lastName={"AJAH"}
						position="CEO"
						company="XYZ Corp"
						comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
						profileImg={eli}
						isClient={false}
					/>
					<Opinion2
						// isDarkMode={isDarkMode}
						firstName="Eliezer"
						lastName={"AJAH"}
						position="CEO"
						company="XYZ Corp"
						comment="Seyi's ability to turn complex ideas into elegant, user-friendly interfaces is truly remarkable. He consistently delivers beyond expectations and communicates effectively throughout the development process. Highly recommended!"
						profileImg={wale}
						isClient={true}
					/>
				</div>
			</div>

			<div className="absolute bottom-[-7%] z-10">
				{isDarkMode ? <DarkBlur2 /> : <LightBlur2 />}
			</div>
		</section>
	);
};

export default Unfiltered;
