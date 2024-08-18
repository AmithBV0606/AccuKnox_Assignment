import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

function WidgetBTN(props) {
  const [widget, setWidget] = useState(true);
  const [widgetData, setWidgetData] = useState({
    category:props.dashBoardName,
    name:"",
    text:"",
  })

  // Create a ref for the element you want to focus initially
  const cancelButtonRef = useRef(null);

  const handleClick = () => {
    setWidget(!widget);
  };

  const handleClose = () => {
    setWidget(true);
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    // console.log(name, " : ", value);
    setWidgetData({...widgetData, [name]:value})
  }

  return (
    <>
      {widget ? (
        <button
          className="flex justify-evenly bg-slate-100 w-36 p-2 rounded-lg hover:bg-slate-200"
          onClick={handleClick}
        >
          <PlusIcon className="h-6 w-6 text-gray-500" />

          <h3 className="text-gray-500">Add Widget</h3>
        </button>
      ) : (
        <Dialog
          open={true}
          onClose={() => {}} // Prevent closing on outside click
          className="relative z-10"
          initialFocus={cancelButtonRef}
        >

            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle
                                    as="h3"
                                    className="text-base font-semibold leading-6 text-gray-900"
                                >
                                    Add a new widget!
                                </DialogTitle>

                                <div className="mt-2">
                                    <form 
                                        className="flex flex-col gap-2"
                                        // onSubmit={(e) => {
                                        //     e.preventDefault();
                                        // }}  
                                    >
                                        <label htmlFor="">Name : </label>
                                        <input
                                            type="text"
                                            placeholder="Add widget name..."
                                            name="name"
                                            onChange={handleInputChange}
                                            className="w-96 p-2 border-2 border-gray-300 outline-none rounded-lg"
                                        />

                                        <label htmlFor="">Text : </label>
                                        <textarea
                                            id=""
                                            placeholder="Add widget text..."
                                            name="text"
                                            onChange={handleInputChange}
                                            className="h-52 p-2 border-2 border-gray-300 outline-none rounded-lg"
                                        ></textarea>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                handleClose();
                                                console.log(widgetData);
                                            }}
                                            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                                        >
                                            Add Widget
                                        </button>

                                        <button
                                            type="button"
                                            ref={cancelButtonRef} // Set focus to this button on modal open
                                            onClick={handleClose}
                                            className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>

        </Dialog>
      )}
    </>
  );
}

export default WidgetBTN;