'use client';
import React, { useState } from "react";

const AddNote = () => {
  const [note, setNote] = useState("");
  
  const addNote = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to add the note to your data source.
    // For example, you can use a state management library or an API request to save the note.
    console.log("Note added:", note);
    setNote(""); // Clear the input field after adding the note
  }

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
}

export default AddNote;
