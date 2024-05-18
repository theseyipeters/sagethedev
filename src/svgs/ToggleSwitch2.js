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
				d="M14.9166 18.2042C16.9988 18.2042 18.6868 16.5163 18.6868 14.4341C18.6868 12.3519 16.9988 10.6639 14.9166 10.6639C12.8344 10.6639 11.1465 12.3519 11.1465 14.4341C11.1465 16.5163 12.8344 18.2042 14.9166 18.2042Z"
				stroke={`${isToggled ? "white" : "#040D12"}`}
				stroke-width="0.870034"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M19.0588 18.5754L18.9834 18.5M18.9834 10.3681L19.0588 10.2927L18.9834 10.3681ZM10.7761 18.5754L10.8515 18.5L10.7761 18.5754ZM14.9174 8.68019V8.63379V8.68019ZM14.9174 20.2342V20.1878V20.2342ZM9.16359 14.434H9.11719H9.16359ZM20.7176 14.434H20.6712H20.7176ZM10.8515 10.3681L10.7761 10.2927L10.8515 10.3681Z"
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
