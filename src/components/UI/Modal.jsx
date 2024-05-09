import Button from './Button';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            // ! This method provided by Modal to other components by using useImperativeHandle
            open() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded shadow">
            {children}
            <form method="dialog" className="mt-3 text-right">
                <Button>Close!</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root'),
    );
});

export default Modal;
