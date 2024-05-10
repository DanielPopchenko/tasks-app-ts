import { forwardRef, ReactNode } from 'react';

interface IProps {
	children?: ReactNode;
	label: string;
	type: 'text' | 'date';
}

// interface Props {
//   children?: ReactNode;
//   type: "submit" | "button";
// }

export type Ref = HTMLInputElement;

const inputClasses =
	'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

const Input = forwardRef<Ref, IProps>(function Input(
	// { label, isTextarea, type, props },
	props,
	ref
) {
	return (
		<p className='flex flex-col gap-1 my-4'>
			<label className='text-sm uppercase font-bold text-stone-500'>
				{props.label}
			</label>

			<input className={inputClasses} ref={ref} {...props} type={props.type} />
		</p>
	);
});

export default Input;
