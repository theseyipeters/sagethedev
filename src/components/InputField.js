import React from "react";

export default function InputField({
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
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				className="placeholder:font-grotta placeholder:text-blue/20 dark:placeholder:text-white/20 text-blue dark:text-white placeholder:text-sm w-full bg-transparent rounded-md py-[10px] px-[14px] border-0.5 border-blue dark:border-white focus:outline-none text-sm md:text-base lg:text-base"
				value={value}
				onChange={onChange}
				required={isRequired}
			/>
		</div>
	);
}
