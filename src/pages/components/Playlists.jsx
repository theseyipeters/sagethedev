import React from "react";
import spotify from "../../assets/spotify.svg";

const Playlists = () => {
	return (
		<section className="w-full flex flex-col gap-y-[20px] px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px] pt-[100px] pb-[150px] font-grotta font-light text-blue dark:text-white ">
			<div>
				<div className="flex items-center gap-x-[10px] ">
					<h1 className="text-[30px] md:text-[35px] lg:text-[45px] text-green-2 dark:text-green-1 font-medium">
						My Playlists
					</h1>
					<img
						src={spotify}
						alt=""
					/>
				</div>
				<p className="text-sm md:text-base lg:text-lg">
					A mix of my dangerously interesting taste in music... Enjoy!
				</p>
			</div>

			<div className="flex flex-col md:flex-col lg:flex-row gap-[20px] ">
				<iframe
					// style="border-radius: 12 px"
					src="https://open.spotify.com/embed/playlist/0sj5Ep6vLcYWUjqcn1eyXq?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allowfullscreen=""
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"></iframe>
				<iframe
					// style="border-radius:12px"
					src="https://open.spotify.com/embed/playlist/01yuMsqz2hfChCvRkvwK5A?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allowfullscreen=""
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"></iframe>
				<iframe
					// style="border-radius:12px"
					src="https://open.spotify.com/embed/playlist/3vaMjrMeMSLZzkBy4VqMJz?utm_source=generator"
					width="100%"
					height="352"
					frameBorder="0"
					allowfullscreen=""
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"></iframe>
			</div>
		</section>
	);
};

export default Playlists;
