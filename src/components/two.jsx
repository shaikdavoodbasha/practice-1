import axios from "axios";
import React, { useEffect, useState } from "react";

const Two = () => {
  const [data, setData] = useState([]);
//   const apiData = async () => {
//     const api = await fetch("https://jsonplaceholder.typicode.com/comments")
//     const converts = await api.json();
//     setData(converts);
//   };
const apiData = async ()=>{
    const api = await axios.get("https://jsonplaceholder.typicode.com/comments")
    const convert = await api.data;
    console.log(convert)
    setData(convert)

}
  useEffect(() => {
    apiData();
    // axios.get("https://jsonplaceholder.typicode.com/comments")
    // .then((res)=>res.data).then((res)=>setData(res)).catch((err)=>console.log("error occured"))
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2"
          >
            <h1 className="text-red-500 text-[14px]">{item.name}</h1>
            <h1 className="text-green-600 text-[16px]">{item.email}</h1>
            <h1 className="text-blue-700 text-[18px]">{item.body}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Two;
