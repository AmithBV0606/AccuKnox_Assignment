import React, { useEffect, useState } from "react";
import WidgetBTN from "./WidgetBTN"

function CSPMCategory() {
    const [cspmData, setCspmData] = useState(null);

    const fetchData = async() => {
        const response = await fetch(`http://localhost:3000/CSPM-Executive-dashboard`);
        const data = await response.json();
        setCspmData(data);
    }

    useEffect(() => {
      fetchData();
    }, [cspmData]);

    const deleteWidget = async (id) => {
      await fetch(`http://localhost:3000/CSPM-Executive-dashboard/${id}`, {
        method:"DELETE"
      });
    }

  return (
    <div className="bg-gray-200 p-5 rounded-lg space-y-5 mx-auto">
      <h3 className="text-lg font-medium">CSPM Executive dashboard : </h3>

        <div className="flex gap-5 flex-wrap mx-10">

            {cspmData && 
              cspmData.map((item) => (
                <div className="bg-white w-96 h-52 p-3 rounded-lg space-y-5" key={item.id} draggable>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <img 
                      src="src/Assets/Xmark.svg" 
                      alt="Cross-Mark" 
                      className="h-6 w-6 cursor-pointer hover:bg-gray-200 rounded-xl"
                      onClick={() => {
                        deleteWidget(item.id)
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
              <WidgetBTN dashBoardName={"CSPM-Executive-dashboard"}/>
            </div>

        </div>
    </div>
  );
}

export default CSPMCategory;