import { forwardRef } from "react";
const Input =  forwardRef(function Input({isTextarea,label,...props},ref) {
  const classes = "w-full p-2 rounded-md border-2 border-gray-700 bg-gray text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:bg-gray-200";
  return (
    <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-gray-900">{label}</label>
        {isTextarea ? <textarea  ref = {ref} className={classes} {...props}/> : <input ref = {ref} className={classes} {...props}/> }
    </p>
  )
});
export default Input;
