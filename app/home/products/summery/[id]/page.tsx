"use client";

import { availability } from "@/actions/availability";
import { getOrder } from "@/actions/getorder";
import { useState } from "react";
let loaded = 0;

export default function SummeryPage({ params }: { params: { id: string } }) {
  function translate(x:string){
    return x
      .replace("bottom", "قائده")
      .replace("top", "راس")
      .replace("height", "ارتفاع");
    
  }
  const [w, setw] = useState(0);
  const [p, setp] = useState(0);
  const [array, setArray] = useState({});
  function load() {
    loaded = 1;
    getOrder([{ _id: params.id }, {}]).then((data) => {
      setw(data[0].weight);
      availability(data[0].type, [
        { _id: data[0].productId },
        { _id: 0, createdAt: 0, updatedAt: 0, __v: 0, price: 0 },
      ]).then((data) => {
        setArray(data[0]);
      });
      setp(data[0].weight * data[0].price);
    });
  }
  if (loaded === 0) {
    load();
  }
  return (
    <>
      <h1>{w}</h1>
      {Object.entries(array).map(
        ([key, value]) => `${translate(key)}: ${value} `,
      )}
      <h1>{p}</h1>
    </>
  );
}
