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

  function capitalizer(input: string): string {
    if (input.length === 0) {
      return input;
    }
  
    const firstLetter = input[0].toUpperCase();
    const restOfTheString = input.slice(1);
  
    return firstLetter + restOfTheString;
  }

  
  const addNote = (e: any) => {
    e.preventDefault();
    const newNote: note = {
      id: 0, // This will be set by the server
      content: capitalizer(note),
      important: false,
    };

    setSomeData([...someData, newNote]);
    setNote(""); // Clear the input field after adding the note
    sendNote(newNote);
  };

  return (
    <div className="my-4">
      <form onSubmit={addNote} className="flex items-center">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border border-gray-400 p-2 mr-2 rounded-lg text-black"
          placeholder="Add a note"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Add note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
