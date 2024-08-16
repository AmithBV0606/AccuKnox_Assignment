import React, { useState } from 'react'
import { PlusIcon } from "@heroicons/react/24/outline";
import AddWidgets from "./AddWidgets"


function WidgetBTN() {
    const [widget, setWidget] = useState(true);

    const handleClick = () => {
        setWidget(!widget);
    }

    const handleClose = () => {
        setWidget(true)
    }

  return (
    <>
        {widget ? (
            <button 
                className='flex justify-evenly bg-slate-100 w-36 p-2 rounded-lg hover:bg-slate-200'
                onClick={handleClick}
            >
                <PlusIcon className="h-6 w-6 text-gray-500" />  

                <h3 className='text-gray-500'>Add Widget</h3>
            </button>
        ) : (
            <AddWidgets onClose={handleClose}/>            
        )}
    </>
  );
}

export default WidgetBTN;