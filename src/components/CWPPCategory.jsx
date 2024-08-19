import React, { useEffect, useState } from "react";
import WidgetBTN from "./WidgetBTN"

function CWPPCategory() {
    const [cwppData, setCwppData] = useState(null);

    const fetchData = async() => {
        const response = await fetch(`http://localhost:3000/CWPP-dashboard`);
        const data = await response.json();
        setCwppData(data);
    }

    useEffect(() => {
      fetchData();
    }, [cwppData]);

    const deleteWidget = async (id) => {
      await fetch(`http://localhost:3000/CWPP-dashboard/${id}`, {
        method:"DELETE"
      });
    }

  return (
    <div className="bg-gray-200 p-5 rounded-lg space-y-5 mx-auto">
      <h3 className="text-lg font-medium">CWPP Dashboard : </h3>

        <div className="flex gap-5 flex-wrap mx-10">

            {cwppData && 
              cwppData.map((item) => (
                <div className="bg-white w-96 h-52 p-3 rounded-lg space-y-5" key={item.id} draggable>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <img 
                      src="src/Assets/Xmark.svg" 
                      alt="Cross-Mark" 
                      className="h-6 w-6 cursor-pointer hover:bg-gray-200 rounded-xl"
                      onClick={() => {
                        deleteWidget(item.id);
                      }}
                    />
                  </div>

                  <p className="text-sm">
                    {item.text}
                  </p>
                </div>
              ))
            }

            <div className="bg-white w-96 h-52 p-3 rounded-lg flex justify-center items-center">
              <WidgetBTN dashBoardName={"CWPP-dashboard"}/>
            </div>

        </div>
    </div>
  );
}

export default CWPPCategory;