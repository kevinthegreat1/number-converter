"use client";

import NumberComponent from "@/components/number-component";
import {useState} from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-4 bg-sky-50">
      <NumberComponent input={true} setNumber={setNumber}/>
      <div>= {number}</div>
      <NumberComponent input={false} number={number}/>
    </main>
  );
}
