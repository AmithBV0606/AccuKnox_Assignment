import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { data } from "autoprefixer";

const Categories = [
    "CSPM",
    "CWPP",
    "Registry Scan",
    "Ticket"
]

function WidgetSettingsBTN() {
  const [settings, setSettings] = useState(true);
  const [displayData, setDisplayData] = useState(null);
  const [selecteditems, setSelectedItems] = useState([]);

  const closeButtonRef = useRef(null);

  const handleClick = () => {
    setSettings(!settings);
  };

  const handleClose = () => {
    setSettings(true)
  }

  const displayWidget = async (category) => {
    if (category === "CSPM") {
      const response = await fetch(`http://localhost:3000/CSPM-Executive-dashboard`);
      const data = await response.json();
      setDisplayData(data);
    } else if(category === "CWPP"){
      const response = await fetch(`http://localhost:3000/CWPP-dashboard`);
      const data = await response.json();
      setDisplayData(data);
    } else if(category === "Registry Scan") {
      const response = await fetch(`http://localhost:3000/Registry-Scan`);
      const data = await response.json();
      setDisplayData(data);
    } else if(category === "Ticket") {
      const response = await fetch(`http://localhost:3000/Ticket`);
      const data = await response.json();
      setDisplayData(data);
    } else {
      console.log("Something went wrong");
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/CSPM-Executive-dashboard`);
      const data = await response.json();
      setDisplayData(data);
    }
    fetchData();
  }, [settings]);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevState) => 
      prevState.includes(id) 
        ? prevState.filter((item) => item !== id) 
        :[...prevState, id]
    );
  };

  const handleConfirm = async () => {
    for (let item of displayData) {
      if (selecteditems.includes(item.id)) {
        await fetch(`http://localhost:3000/${item.category}/${item.id}`, {
          method: "DELETE",
        });
      }
    }
    handleClose();
  }

  return (
    <>
      {settings ? (
        <button
          className="flex justify-evenly bg-slate-100 w-36 p-2 rounded-lg hover:bg-slate-200"
          onClick={handleClick}
        >
          <h3 className="text-gray-500">Widget Settings</h3>
        </button>
      ) : (
        <Dialog 
            open={true} 
            onClose={() => {}} 
            className="relative z-10"
            initialFocus={closeButtonRef}
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <DialogPanel
                  transition
                  className="pointer-events-auto relative w-screen max-w-3xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                >
                  <TransitionChild>
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        ref={closeButtonRef}
                        onClick={handleClose}
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </TransitionChild>

                  <div className="h-full flex-col bg-white py-6 space-y-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <DialogTitle 
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        <h1 className="text-2xl font-bold">
                          Personalise your dashboard by enabling the custom widgets
                        </h1>
                      </DialogTitle>
                    </div>

                    <div className="relative mt-6 flex gap-20 flex-1 px-4 sm:px-6">
                        {Categories.map((item, index) => (
                          <span 
                            key={index}
                            onClick={(e) => displayWidget(item)}
                            className="h-8 text-lg font-normal border-b-4 border-blue-700 cursor-pointer"
                          >
                            {item}
                          </span>
                        ))}
                    </div>

                    <div className="mx-2 min-h-[600px] overflow-y-scroll relative flex flex-col gap-5 flex-1 px-4 bg-gray-100 p-5 rounded-2xl">
                      {displayData && displayData.map((item) => (
                        <div 
                          key={item.id} 
                          className={`flex gap-5 bg-slate-300 p-5 rounded-2xl ${selecteditems.includes(item.id) ? "bg-red-300" : ""}`}
                        >
                          <input 
                            type="checkbox" 
                            name={item.title} 
                            id={item.id}
                            checked={selecteditems.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id)}
                            />
                          <h3>{item.title}</h3>
                        </div>                        
                      ))}
                    </div>

                    <div className="fixed bottom-5 right-5 m-2">
                      <button 
                        className="m-2 border border-blue-900 p-2 rounded-lg"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>

                      <button 
                        className="m-2 bg-blue-600 text-white p-2 rounded-lg"
                        onClick={handleConfirm}
                      >
                        Remove Selected
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}

export default WidgetSettingsBTN;