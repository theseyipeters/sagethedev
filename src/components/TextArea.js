import React from "react";

export default function TextArea({
	label,
	type,
	id,
	name,
	value,
	onChange,
	placeholder,
	isRequired,
}) {
	return (
		<div className="w-full font-grotta flex flex-col items-start gap-1">
			<label className="text-left text-xs md:text-sm lg:text-base text-blue dark:text-white font-medium">
				{label} {isRequired && <span className="text-sm text-red-500">*</span>}
			</label>
			<textarea
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				className="placeholder:text-blue/20 h-[180px] dark:placeholder:text-white/20 placeholder:text-sm  w-full bg-transparent rounded-md py-[10px] px-[14px]  border-0.5 border-blue dark:border-white focus:outline-none text-sm md:text-base lg:text-base"
				value={value}
				onChange={onChange}
				required={isRequired}
			/>
		</div>
	);
}
