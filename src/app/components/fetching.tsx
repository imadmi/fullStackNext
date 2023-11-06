// 'use client';
import React from "react";

export interface note {
    id: number;
    content: string;
    important: boolean;
  }

export async function getNotes() {
    const res = await fetch("http://localhost:3001/notes", {cache : "no-store"});
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data :note[]= await res.json(); // Use await to properly handle the JSON response
    // console.log(data);

    return data;
  }

  export async function deleteNote(id : number) {
    const res = await fetch(`http://localhost:3001/notes/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete note");
    }
  }

  export async function sendNote(newNote : note) {
    const res = await fetch(`http://localhost:3001/notes`, {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to delete note");
    }
    const data = await res.json();
    // console.log(data);
  }

