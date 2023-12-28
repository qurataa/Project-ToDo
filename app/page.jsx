"use client";

import Image from "next/image";
import ItemTodo from "./components/ItemTodo";
import { useState, useRef, KeyboardEvent } from "react";

export default function Home() {
  const [todoItem, setTodoItem] = useState([]);
  const [onProgresItem, setOnProgresItem] = useState([]);
  const [doneItem, setDoneItem] = useState([]);

  const todoRef = useRef(null);

  const handleDone = (item) => {
    setOnProgresItem(onProgresItem.filter((a) => a !== item));
    setDoneItem((prev) => [...prev, item]);
  };

  const handleOnProgressDelete = (item) => {
    setOnProgresItem(onProgresItem.filter(a => a !== item))
  }

  const handleDoneDelete = (item) => {
    setDoneItem(doneItem.filter(a => a !== item))
  }

  const handleInput = (event) => {
    const value = todoRef.current?.value;
    if (event.key === "Enter") {
      event.preventDefault();
      setOnProgresItem((prev) => {
        return [...prev, value];
      });
      if (todoRef.current !== null) {
        todoRef.current.value = "";
      }
    }
  };

  const handleClick = () => {
    const value = todoRef.current?.value;
    setOnProgresItem((prev) => {
      return [...prev, value];
    });
    if (todoRef.current !== null) {
      todoRef.current.value = "";
    }
  };
  console.log(onProgresItem);
  console.log(doneItem);
  return (
    <main className="min-h-screen bg-indigo-100 p-10 ">
      <h1 className="text-center p-10 text-3xl font-bold">TODO List</h1>
      <div className="flex justify-center gap-5">
        <input className="p-2 rounded-lg w-2/4" placeholder="Input todo..." ref={todoRef} onKeyDown={handleInput} />
        <button className="bg-amber-100 rounded-lg p-2" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="flex mt-10 gap-5">
        <div className="w-1/2 h-min bg-orange-50 rounded-md shadow-sm px-5">
          <h3 className="font-semibold py-5">On Progress</h3>
          <div className="flex flex-col ">
            {onProgresItem.map((item, index) => {
              return <ItemTodo key={index} todo={item} number={index} done={handleDone} isDone={false} deleteBtn={handleOnProgressDelete}/>;
            })}
          </div>
        </div>
        <div className="w-1/2 h-min bg-orange-50 rounded-md shadow-sm px-5">
          <h3 className="font-semibold py-5">Done</h3>
          <div className="flex flex-col ">
            {doneItem.map((item, index) => {
              return <ItemTodo key={index} todo={item} number={index} done={handleDone} isDone={true} deleteBtn={handleDoneDelete}/>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
