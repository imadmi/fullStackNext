"use client";
import React, { useEffect } from "react";
import { deleteNote } from "./fetching";
import { useMyContext } from "../context/store";

export interface note {
  id: number;
  content: string;
  important: boolean;
}

export default function Note() {
  const { someData , setSomeData } = useMyContext();

  const DeleteData = (id : number) => {
    const newData = someData.filter((item) => item.id !== id);
    deleteNote(id)
    setSomeData(newData);
  }

  return (
    <ul className="text-white">
      {someData.map((note) => (
        <li key={note.id} className="mb-4 flex items-center">
          <span className="text-xl">{note.content}</span>
          <button
            onClick={() => DeleteData(note.id)}
            className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
          >
            Delete note
          </button>
        </li>
      ))}
    </ul>
  );
}
