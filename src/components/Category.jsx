import React from "react";

function Category(props) {
  return (
    <div className="bg-gray-200 p-5 rounded-lg space-y-5 mx-auto">
      <h3 className="text-lg font-medium">{props.widgetName} : </h3>

      <div className="flex gap-5 flex-wrap mx-10" >
        <div className="bg-white w-96 p-3 rounded-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          aliquid tempore facere et eos unde repellendus harum accusantium
          voluptatem facilis numquam deserunt aspernatur animi incidunt,
          consequuntur id sed ipsa sequi, distinctio enim veniam temporibus.
        </div>

        <div className="bg-white w-96 p-3 rounded-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          aliquid tempore facere et eos unde repellendus harum accusantium
          voluptatem facilis numquam deserunt aspernatur animi incidunt,
          consequuntur id sed ipsa sequi, distinctio enim veniam temporibus.
        </div>

        <div className="bg-white w-96 p-3 rounded-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          aliquid tempore facere et eos unde repellendus harum accusantium
          voluptatem facilis numquam deserunt aspernatur animi incidunt,
          consequuntur id sed ipsa sequi, distinctio enim veniam temporibus.
        </div>

        <div className="bg-white w-96 p-3 rounded-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          aliquid tempore facere et eos unde repellendus harum accusantium
          voluptatem facilis numquam deserunt aspernatur animi incidunt,
          consequuntur id sed ipsa sequi, distinctio enim veniam temporibus.
        </div>

      </div>
    </div>
  );
}

export default Category;