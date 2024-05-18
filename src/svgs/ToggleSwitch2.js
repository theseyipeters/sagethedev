import React, { useState } from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch2({ setDarkMode }) {
	const [isToggled, setIsToggled] = useState(false);

	const handleToggle = () => {
		setIsToggled(!isToggled);
		setDarkMode();
	};
	return (
		<svg
			onClick={handleToggle}
			width="29"
			height="29"
			viewBox="0 0 29 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<rect
				x="2.1259"
				y="2.02483"
				width="24.1505"
				height="24.1505"
				rx="12.0753"
				stroke={`${isToggled ? "white" : "#040D12"}`}
				stroke-width="0.849466"
			/>
			<path
				d="M14.3405 18.2042C16.4227 18.2042 18.1106 16.5163 18.1106 14.4341C18.1106 12.3519 16.4227 10.6639 14.3405 10.6639C12.2583 10.6639 10.5703 12.3519 10.5703 14.4341C10.5703 16.5163 12.2583 18.2042 14.3405 18.2042Z"
				stroke={`${isToggled ? "white" : "#040D12"}`}
				stroke-width="0.870034"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M18.4826 18.5754L18.4072 18.5M18.4072 10.3681L18.4826 10.2927L18.4072 10.3681ZM10.1999 18.5754L10.2753 18.5L10.1999 18.5754ZM14.3412 8.68019V8.63379V8.68019ZM14.3412 20.2342V20.1878V20.2342ZM8.58742 14.434H8.54102H8.58742ZM20.1415 14.434H20.0951H20.1415ZM10.2753 10.3681L10.1999 10.2927L10.2753 10.3681Z"
				stroke={`${isToggled ? "white" : "#040D12"}`}
				stroke-width="1.16005"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<circle
				cx="14.1426"
				cy="14.1422"
				r="10"
				transform="rotate(-135 14.1426 14.1422)"
				fill={`${isToggled ? "" : "#040D12"}`}
			/>
			{isToggled ? null : (
				<path
					d="M19.9774 8.30792C23.197 11.5275 23.1949 16.7496 19.9727 19.9718"
					stroke="white"
					stroke-width="1.95986"
					stroke-linecap="round"
				/>
			)}
		</svg>
	);
}
