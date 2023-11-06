"use client";

import { createContext, useContext, useState , ReactNode} from "react";

export interface note {
  id: number;
  content: string;
  important: boolean;
}

interface MyContextType {
  someData: note[];
  setSomeData: (data: note[]) => void;
}


const MyContext = createContext<MyContextType | undefined>(undefined);

export function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
}

export function MyContextProvider({ children }: { children: ReactNode }) {
  let [someData, setSomeData] = useState<note[]>([]);

  // const updateSomeData = (data: Note[]) => {
  //   console.log("store : data : ", data);
    // setSomeData(data);
  // };
  // someData = [{ id: 1, content: "hello", important: true }];
  // You can provide any initial data or functions here

  return (
    // <MyContext.Provider value={{ someData, setSomeData : updateSomeData}}>
    <MyContext.Provider value={{ someData, setSomeData }}>
      {children}
    </MyContext.Provider>
  );
}
