// "use client";

import React from "react";
import { getData } from "../components/fetching";
import Addnote from "../components/addnote";

interface notes {
  id: number;
  content: string;
  important: boolean;
}

export function Note(props: any) {
  return (
    <>
      <ul>
        {props.notes.map((note: note) => {return (
          <>
          <li key={note.id}>- {note.content} .  <button> delete note</button></li>
          </>
        );}
        )}
      </ul>
    </>
  );
}

export default async function Page() {
  const notes: notes[] = await getData();

  return (
    <>
      <div className="bg-gray-700 min-h-screen">
        They say :
        <Note notes={notes} />
        <Addnote />
      </div>
    </>
  );
}
