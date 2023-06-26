import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Header({ search, setSearch }) {
  return (
    <>
      <div className="bg-orange-cool shadow-xl flex items-center justify-between px-4 py-4 w-full">
        <p className="font-bold text-8xl text-white">TodoList</p>

        <div className="flex gap-2 mr-4">
          <input
            className="rounded-full h-8 w-80 px-2"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit" className="hover:scale-95">
            <BsSearch size={"16px"} color="#ffffff" />
          </button>
        </div>
      </div>
    </>
  );
}
