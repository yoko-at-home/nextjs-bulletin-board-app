import { Button } from "@mantine/core";
import randomColor from "randomcolor";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";

// import MouseParticles from "react-mouse-particles";

const Main = () => {
  const initialState =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("items")) || []
      : [];
  const [item, setItem] = useState("");
  const [items, setItems] = useState(initialState);

  // const keyPress = (event) => {
  //   let code = event.keyCode || event.which;
  //   if (code === 13) {
  //     newitem();
  //   }
  // };

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
    const newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
  };

  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="text-gray-500 p-3 font-serif">
      {/* <MouseParticles
        g={1}
        number={200}
        color={["#ff0000", "peachpuff"]}
        radius={10}
        cull="MuiSvgIcon-root,MuiButton-root"
        level={10}
      /> */}
      <div className="flex justify-center mx-auto mb-10 font-semibold items-center">
        <input
          className="bg-red-200 rounded-sm px-6 py-2 mr-2"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter something..."
          // onKeyPress={(e) => keyPress(e)}
        />
        <Button
          variant="outline"
          color="gray"
          size="xs"
          uppercase
          className="bg-red-500 rounded-sm text-white px-3 py-2"
          onClick={newitem}
        >
          ENTER
        </Button>
      </div>
      <div>
        {items?.map((item, index) => {
          return (
            <Draggable
              key={item.id}
              defaultPosition={item.defaultPos}
              onStop={(_e, data) => {
                updatePos(data, index);
              }}
            >
              <div
                style={{ backgroundColor: item.color }}
                className="flex justify-between w-60 p-4"
              >
                <div>{`${item.item}`}</div>
                <button
                  type="button"
                  className="rounded-full bg-green-500 px-2 py-1 text-xs border-0 text-gray-100"
                  id="delete"
                  onClick={() => deleteNote(item.id)}
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
