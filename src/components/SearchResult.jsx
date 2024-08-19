import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function SearchResult() {
    const { searchData } = useSelector((state) => state.widget);

    const [value, setValue] = useState([]);
    
    const fetchAllData = async () => {
        try {
            const response1 = await fetch(`http://localhost:3000/CSPM-Executive-dashboard`);
            const data1 = await response1.json();
      
            const response2 = await fetch(`http://localhost:3000/CWPP-dashboard`);
            const data2 = await response2.json();
      
            const response3 = await fetch(`http://localhost:3000/Registry-Scan`);
            const data3 = await response3.json();
      
            const response4 = await fetch(`http://localhost:3000/Ticket`);
            const data4 = await response4.json();
      
            // Combine all the data into a single array and set it to the state
            setValue([...data1, ...data2, ...data3, ...data4]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
      fetchAllData()
    }, [searchData]);
    
    
  return (
    <div className="m-2 h-full max-w-full px-4 py-6 sm:px-6 lg:px-8 bg-sky-200 rounded-lg space-y-8">
      {value &&
        value.filter((item) => {
          if (searchData.length === 0) {
            return item;
          } else {
            return item.title.toLowerCase().includes(searchData.toLowerCase());
          }
        }).map((item) => {
            return (
                <div className="bg-gray-200 p-5 rounded-lg space-y-5 mx-auto">
                    <h3 className="text-lg font-medium">{item.category} : </h3>

                    <div className="bg-white w-96 h-52 p-3 rounded-lg space-y-5" key={item.id} draggable>
                        <h2 className="text-lg font-medium">{item.title}</h2>

                        <p className="text-sm">
                            {item.text}
                        </p>
                    </div>
                </div>
            );
        })}
    </div>
  );
}

export default SearchResult;