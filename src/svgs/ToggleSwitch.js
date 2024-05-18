import React, { useState } from "react";
import "./ToggleSwitch.css"; // Import the CSS file

export default function ToggleSwitch({ setDarkMode }) {
	const [isToggled, setIsToggled] = useState(false);

	const handleToggle = () => {
		setIsToggled(!isToggled);
		setDarkMode();
	};

	return (
		<svg
			width="67"
			height="26"
			viewBox="0 0 67 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={handleToggle} // Add click handler
			className={isToggled ? "" : "toggled"} // Apply class based on state
		>
			<rect
				x="0.992264"
				y="0.754959"
				width="65.5821"
				height="24.0137"
				rx="12.0069"
				stroke={`${isToggled ? "white" : "#040D12"}`}
				strokeWidth="0.851715"
			/>
			<path
				d="M54.5252 16.576C56.613 16.576 58.3054 14.8836 58.3054 12.7959C58.3054 10.7082 56.613 9.01575 54.5252 9.01575C52.4375 9.01575 50.7451 10.7082 50.7451 12.7959C50.7451 14.8836 52.4375 16.576 54.5252 16.576Z"
				stroke={`${isToggled ? "white" : "#040D12"}`}
				strokeWidth="0.872338"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M58.6769 16.9481L58.6013 16.8725M58.6013 8.71908L58.6769 8.64348L58.6013 8.71908ZM50.3722 16.9481L50.4478 16.8725L50.3722 16.9481ZM54.5246 7.02675V6.98022V7.02675ZM54.5246 18.6114V18.5649V18.6114ZM48.7555 12.7958H48.709H48.7555ZM60.3402 12.7958H60.2936H60.3402ZM50.4478 8.71908L50.3722 8.64348L50.4478 8.71908Z"
				stroke={`${isToggled ? "white" : "#040D12"}`}
				strokeWidth="1.16312"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.23259 13.043C7.44195 16.038 9.98336 18.4748 13.0249 18.6085C15.1709 18.7016 17.09 17.7013 18.2415 16.1253C18.7184 15.4797 18.4625 15.0494 17.6658 15.1948C17.2761 15.2646 16.8748 15.2936 16.4561 15.2762C13.6123 15.1599 11.2861 12.7813 11.2744 9.97238C11.2686 9.21635 11.4256 8.50103 11.7106 7.84969C12.0246 7.12855 11.6466 6.78543 10.9197 7.09366C8.6167 8.06486 7.04068 10.3853 7.23259 13.043Z"
				stroke={`${isToggled ? "white" : ""}`}
				fill={`${isToggled ? "" : "#040D12"}`}
				strokeWidth="0.872338"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<ellipse
				className="toggle-ellipse" // Add class for the ellipse
				cx="12.891"
				cy="12.6543"
				rx="9.90083"
				ry="9.93862"
				transform="rotate(-135 12.891 12.6543)"
				fill={`${isToggled ? "white" : "#040D12"}`}
			/>
			<path
				className="toggle-ellipse"
				d="M18.6888 6.85577C21.8765 10.0434 21.8645 15.2236 18.6621 18.426"
				stroke={`${isToggled ? "black" : "#DCDCDC"}`}
				strokeWidth="1.96505"
				strokeLinecap="round"
			/>
		</svg>
	);
}
