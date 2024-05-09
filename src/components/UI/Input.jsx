import React, { forwardRef } from "react";

const inputClasses =
	"w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

const Input = forwardRef(function Input(
	{ label, isTextarea, type, props },
	ref
) {
	return (
		<p className="flex flex-col gap-1 my-4">
			<label className="text-sm uppercase font-bold text-stone-500">
				{label}
			</label>
			{isTextarea ? (
				<textarea className={inputClasses} ref={ref} {...props} />
			) : (
				<input type={type} className={inputClasses} ref={ref} {...props} />
			)}
		</p>
	);
});

export default Input;
