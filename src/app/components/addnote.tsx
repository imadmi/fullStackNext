"use client";
import React, { useEffect, useState } from "react";
import { sendNote } from "./fetching";

export interface note {
  id: number;
  content: string;
  important: boolean;
}

const AddNote = (props: any) => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<note[]>([]); // the type of notes is important

  const addNote = (e: any) => {
    e.preventDefault();
    const newNote: note = {
      id: 0, // This will be set by the server
      content: note,
      important: false,
    };

    sendNote(newNote);
    setNotes([...props.notes, newNote]);
    console.log("Notes : ", notes);
    setNote(""); // Clear the input field after adding the note
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
