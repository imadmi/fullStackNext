// "use client";

import axios from "axios";
import React from "react";
import { getData, deleteNote } from "../components/fetching";
import Addnote from "../components/addnote";
import Note from "../components/note";

export interface notes {
  id: number;
  content: string;
  important: boolean;
}

export default async function Page() {
  let notes = await getData();
  console.log(notes);

  return (
    <>
      <div className="bg-gray-700 min-h-screen">
        They say :
        <Note notes={notes} />
        <Addnote notes={notes} />
      </div>
    </>
  );
}
