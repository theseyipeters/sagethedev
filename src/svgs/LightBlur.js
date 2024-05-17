import React from "react";

export default function LightBlur() {
	return (
		<svg
			width="1440"
			height="359"
			viewBox="0 0 1440 359"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_f_257_269)">
				<rect
					width="1440"
					height="287"
					transform="translate(0 -26)"
					fill="#DCF2FF"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_257_269"
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
						result="effect1_foregroundBlur_257_269"
					/>
				</filter>
			</defs>
		</svg>
	);
}
