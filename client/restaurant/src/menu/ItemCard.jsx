import React, { useContext, useState } from "react";
import NewItemForm from "./NewItemForm";
import globalContext from "../globalContext.jsx";

export default function ({ title, types, setTypes }) {
  const [isAdding, setIsAdding] = useState(false);
  const { deleteItem } = useContext(globalContext);

  const handleClick = (event) => {
    event.preventDefault();
    deleteItem(event.target.id);
    let updatedItems = [...types];
    updatedItems = updatedItems.filter((item) => item._id !== event.target.id);
    setTypes(updatedItems);
  };

  let category;

  const listItems = types.map((type) => {
    category = type.categories._id;
/*     console.log(typeof category)
    if (category === undefined) {
      category = prompt("Enter category 1. Main, 2. Side, 3. Drink:")
      if (category == 1) {return category = "642bce08f9a5c6ba02496f4f"}
      if (category == 2) {return category = "642bce4af9a5c6ba02496f51"}
      if (category == 3) {return category = "642bce1d363ac655bf7b3a66"}
    } */
 
    return (
      <li
        key={type._id ? type._id : Math.random() * 999}
        className="flex items-center justify-between my-1 bg-white rounded-lg shadow-sm px-6 py-4"
      >
        <div className={"border p-6 rounded-lg shadow-md mb-3 bg-white w-full"}>
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-medium text-gray-900">{type.name}</h2>
            <button
              className="text-sm font-medium text-red-600 py-1 px-1 rounded-lg"
              id={type._id}
              onClick={handleClick}
            >
              DELETE
            </button>
          </div>
          <p className="text-gray-500 text-sm">{type.ingredients}</p>
          <p className="text-gray-900 font-medium">{type.price} SEK</p>
        </div>
      </li>
    );
  });

  return (
    <div className="flex flex-col w-[20rem] md:m-4">
      <h2 className="font-bold text-white bg-blue-500 p-1 flex justify-between cursor-pointer rounded">
        {title}{" "}
        {!isAdding ? (
          <button
            onClick={() => {
              setIsAdding(true);
            }}
          >
            add item
          </button>
        ) : (
          <button
            onClick={() => {
              setIsAdding(false);
            }}
          >
            close
          </button>
        )}
      </h2>
      {isAdding ? (
        <NewItemForm category={category} types={types} setTypes={setTypes} />
      ) : null}
      <ul>{listItems}</ul>
    </div>
  );
}
