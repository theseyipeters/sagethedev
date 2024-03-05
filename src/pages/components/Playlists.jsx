import React from "react";
import spotify from "../../assets/spotify.svg";

const Playlists = () => {
	return (
		<section className="flex flex-col gap-y-[20px] px-[100px] py-[50px] font-grotta font-light text-white">
			<div>
				<div className="flex items-center gap-x-[10px] ">
					<h1 className="text-[45px] text-green font-medium">My Playlists</h1>
					<img
						src={spotify}
						alt=""
					/>
				</div>
				<p>A mix of my dangerously interesting taste in music... Enjoy!</p>
			</div>

			<div className="flex gap-x-[20px]">
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
