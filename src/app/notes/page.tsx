"use client";

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { getNotes, deleteNote } from "../components/fetching";
import Addnote from "../components/addnote";
import Note from "../components/note";
import { useMyContext } from "../context/store";

export interface note {
  id: number;
  content: string;
  important: boolean;
}

export default function Page() {
  const { someData, setSomeData } = useMyContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotes();
        setSomeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [someData]);

  return (
    <div className="bg-gray-700 min-h-screen p-6 text-white">
      <p className="text-3xl">They say:</p>
      <div className="my-4">
        <Note />
      </div>
      <div className="my-4">
        <Addnote />
      </div>
    </div>
  );
}
