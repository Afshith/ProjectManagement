
import Input from './Input'
import { useRef } from 'react'
import Modal from "./Modal"
export default function NewProject({onAdd,onCancel}) {
  const title =useRef();
  const description =useRef();
  const dueDate = useRef();
  const modal  = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription  = description.current.value;
    const enteredDueDate = dueDate.current.value;
    // console.log(enteredTitle);

    if(enteredDescription.trim() === '' || enteredDueDate.trim()=== '' || enteredTitle.trim() === ''){
      modal.current.open();
      return;
    }

    onAdd({
      title:enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });  
  };
  return (
    <>
    <Modal ref = {modal} buttonValue = "close">
      <h2 className='text-xl font-bold text-stone-500'>Enter some data</h2>
      <p className='mb-4 text-stone-500'>Please fill all the details</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-900 mb-8 drop-shadow-lg uppercase">Project Details</h1>

        <menu className='flex my-4 justify-end gap-4 items-center'>
            
            <li><button className='text-stone-800 hover:text-white hover:bg-red-800 px-6 py-3 text-sm md:text-lg rounded -lg ' onClick ={onCancel}>Cancel</button></li>
            <li><button onClick ={handleSave} className="px-6 py-3 text-sm md:text-lg rounded-lg bg-gray-800 text-white hover:bg-gray-700 shadow-lg transition-transform transform hover:scale-105">Save</button></li>
        </menu>
        <div>
           <Input type = "text" ref = {title} label="Title" />
           <Input ref = {description} label="Description" isTextarea = {true}/>
           <Input type = "date" ref = {dueDate} label="Due Date" />
        </div>
    </div>
    </>
    
  )
}
