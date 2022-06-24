import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
var randomColor = require("randomcolor");

const Main = () => {
  const initialState = JSON.parse(localStorage.getItem("items")) || [];
  const [item, setItem] = useState("");
  const [items, setItems] = useState(initialState);

  const keyPress = (event) => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      newitem();
    }
  };

  const newitem = () => {
    if (item.trim() !== "") {
      //if input is not blank, create a new item object
      const newitem = {
        id: uuidv4(),
        item: item,
        color: randomColor({ luminosity: "light" }),
        defaultPos: { x: 100, y: 0 },
      };
      //add this new item object to the items array
      setItems((items) => [...items, newitem]);
      //reset item value to empty string
      setItem("");
    } else {
      alert("Enter a item");
      setItem("");
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
  };

  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="text-gray-900 p-3">
      <div className="flex justify-center mx-auto">
        <input
          className="bg-red-200 rounded-sm px-3 py-2"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter something..."
          onKeyPress={(e) => keyPress(e)}
        />
        <button
          className="bg-red-500 rounded-sm text-white px-3 py-2"
          onClick={newitem}
        >
          ENTER
        </button>
      </div>
      <div>
        {items &&
          items.map((item, index) => {
            return (
              <Draggable
                key={item.id}
                defaultPosition={item.defaultPos}
                onStop={(e, data) => {
                  updatePos(data, index);
                }}
              >
                <div
                  style={{ backgroundColor: item.color }}
                  className="flex justify-between w-60 p-4"
                >
                  {`${item.item}`}
                  <button
                    className="rounded-full bg-green-500 px-2 py-1 text-xs border-0 text-gray-100"
                    id="delete"
                    onClick={(e) => deleteNote(item.id)}
                  >
                    X
                  </button>
                </div>
              </Draggable>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
