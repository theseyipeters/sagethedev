import React from "react";
// import Link from "react-router-dom";

const Article = ({ image, title, description, link }) => {
	const handleClick = (e) => {
		window.open(link);
	};
	return (
		<div className="w-[90%]">
			<div className="flex flex-col gap-y-[15px]  w-full">
				<img
					src={image}
					alt={image}
					// width={"800px"}
				/>
				<div className="w-[full] flex flex-col gap-y-[20px]">
					<div className="w-full flex flex-col gap-y-[20px] text-white font-grotta">
						<div className="bg-[#141B1F] rounded-[10px] p-[8px]">
							<h1 className="text-[40px] font-medium">{title}</h1>
						</div>
						<p className="w-[650px]">{description}</p>
					</div>
					<button
						onClick={handleClick}
						className="flex gap-x-[5px] items-center text-green font-grotta font-medium py-2 hover:underline">
						Read more{" "}
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
				</div>
			</div>
		</div>
	);
};

export default Article;
