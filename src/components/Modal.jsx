import { createPortal } from "react-dom"
import { forwardRef,useImperativeHandle, useRef } from "react";
import Button from "./Button"

const Modal =  forwardRef(function Modal({children,buttonValue},ref) {

 const dialog = useRef();
 useImperativeHandle(ref , () => {
    return{
        open(){
            dialog.current.showModal();
        }
    }
 })
  return createPortal(
    <dialog ref = {dialog} className="backdrop:bg-stone-900/90 p-8 rounded-md shadow-md">
        {children}
        <form method="dialog" className="text-right">
            <Button>{buttonValue}</Button>
        </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

 