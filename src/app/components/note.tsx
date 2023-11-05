"use client";
import React from "react";
import { deleteNote } from "./fetching";

export interface note {
  id: number;
  content: string;
  important: boolean;
}

export default function Note(props: any) {
  return (
    <>
      <ul>
        {props.notes.map((note: note) => (
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
