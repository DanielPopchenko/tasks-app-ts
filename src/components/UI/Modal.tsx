import Button from './Button.jsx';
import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	children?: ReactNode;
	// type: 'submit' | 'button';
}

export type IOpenModalHandle = {
	open: () => void;
};

// export type Ref = HTMLDialogElement;

const Modal = forwardRef<IOpenModalHandle, Props>(function Modal(props, ref) {
	const dialog = useRef<HTMLDialogElement>(null);
	useImperativeHandle(ref, () => {
		return {
			// ! This method provided by Modal to other components by using useImperativeHandle
			open() {
				dialog.current!.showModal();
			},
		};
	});

	return createPortal(
		<dialog
			ref={dialog}
			className='backdrop:bg-stone-900/90 p-4 rounded shadow'
		>
			{props.children}
			<form method='dialog' className='mt-3 text-right'>
				<Button>Close!</Button>
			</form>
		</dialog>,
		document.getElementById('modal-root')!
	);
});

export default Modal;
