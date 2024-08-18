import React, { useEffect, useState } from "react";
import WidgetBTN from "./WidgetBTN"

function TicketCategory() {
    const [ticketData, setTicketData] = useState(null);

    const fetchData = async() => {
        const response = await fetch(`http://localhost:3000/Ticket`);
        const data = await response.json();
        // console.log(data);
        setTicketData(data);
    }

    useEffect(() => {
      fetchData();
    }, [])

  return (
    <div className="bg-gray-200 p-5 rounded-lg space-y-5 mx-auto">
      <h3 className="text-lg font-medium">Ticket : </h3>

        <div className="flex gap-5 flex-wrap mx-10">

            {ticketData && 
              ticketData.map((item) => (
                <div className="bg-white w-96 p-3 rounded-lg space-y-5" key={item.id} draggable>
                  <h2 className="text-lg font-medium">{item.title}</h2>

                  <p className="text-sm">
                    {item.text}
                  </p>
                </div>
              ))
            }

            <div className="bg-white w-96 p-3 rounded-lg flex justify-center items-center">
              <WidgetBTN dashBoardName={"Ticket"}/>
            </div>

        </div>
    </div>
  );
}

export default TicketCategory;