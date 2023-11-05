"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface note {
  id: number;
  content: string;
  important: boolean;
}

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export function MyContextProvider({ children }) {
  const [someData, setSomeData] = useState<note[]>([]);

  // You can provide any initial data or functions here

  return (
    <MyContext.Provider value={{ someData, setSomeData }}>
      {children}
    </MyContext.Provider>
  );
}
