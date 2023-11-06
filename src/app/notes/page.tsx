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
        // Fetch data using your getNotes function or any data fetching method
        const data = await getNotes();
        setSomeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [someData]);

  return (
    <>
      <div className="bg-gray-700 min-h-screen">
        <br></br>
        They say :
        <br></br>
        <br></br>
        <Note />
        <br></br>
        <Addnote />
      </div>
    </>
  );
}
