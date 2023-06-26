import React from "react";
import "../index.css";

export default function TodoTask({ todo, removeTask, doneTask, setEditOpen }) {
  return (
    <div className=" h-56 w-[313px] bg-yellow-cool flex flex-col gap-4 px-12 py-4 rounded-xl shadow-lg items-start justify-center hover:scale-95 transition-transform">
      <div
        className="text-base text-black h-1/5"
        style={{ textDecoration: todo.isDone ? "line-through" : "" }}
      >
        {" "}
        {todo.date}{" "}
      </div>

      <div
        className="text-3xl font-light h-2/5"
        style={{ textDecoration: todo.isDone ? "line-through" : "" }}
      >
        {" "}
        {todo.text}
      </div>

      <div
        className="text-xl font-light h-1/5"
        style={{ textDecoration: todo.isDone ? "line-through" : "" }}
      >
        {" "}
        {todo.category}{" "}
      </div>

      <div className="flex gap-8 h-1/5">
        <div
          onClick={() => doneTask(todo.id)}
          className="flex text-green-600 cursor-pointer hover:text-green-700 transition-colors "
        >
          Done
        </div>

        <div
          onClick={() => removeTask(todo.id)}
          className="flex  text-red-600 cursor-pointer hover:text-red-700 transition-colors"
        >
          Delete
        </div>

        <div
          onClick={() => setEditOpen(true)}
          className="flex  text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
        >
          Edit
        </div>
      </div>
    </div>
  );
}
