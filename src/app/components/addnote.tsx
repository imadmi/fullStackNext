"use client";
import React, { useEffect, useState } from "react";
import { sendNote } from "./fetching";
import { useMyContext } from '../context/store';

export interface note {
  id: number;
  content: string;
  important: boolean;
}

const AddNote = (props: any) => {
  const [note, setNote] = useState("");
  const { someData, setSomeData } = useMyContext();


  const addNote = (e: any) => {
    e.preventDefault();
    const newNote: note = {
      id: 0, // This will be set by the server
      content: note,
      important: false,
    };

    () => setSomeData([...someData, newNote]);
    () => setNote(""); // Clear the input field after adding the note
    sendNote(newNote);
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Add note</button>
      </form>
    </div>
  );
};

export default AddNote;
