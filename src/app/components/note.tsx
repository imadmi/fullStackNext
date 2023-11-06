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
  const { someData } = useMyContext();

  return (
    <>
      <ul>
        {someData.map((note: note) => (
          <li key={note.id}>
            - {note.content} .
            <button onClick={() => deleteNote(note.id)} className="text-white">
              Delete note
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
