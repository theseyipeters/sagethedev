import React from "react";
import { Link } from "react-router-dom";

export default function ContactMe() {
	return (
		<Link
			to={"/contact"}
			className="flex gap-2 font-grotta py-16">
			<h1 className="underline-thick cursor-pointer ">Send Me A Message</h1>
			<span>
				<svg
					className="animate-left-right"
					width="24"
					height="24"
					xmlns="http://www.w3.org/2000/svg"
					fillRule="evenodd"
					clipRule="evenodd">
					<path
						fill="currentColor"
						d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
				</svg>
			</span>
		</Link>
	);
}
