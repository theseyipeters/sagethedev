import React from "react";

export default function DarkBlur2() {
	return (
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
	);
}
