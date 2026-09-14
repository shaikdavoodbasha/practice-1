import React, { useEffect, useState } from "react";

const One1 = () => {
  const [data, setData] = useState([]);

  const fetchApiData = async () => {
    const api = await fetch("https://jsonplaceholder.typicode.com/posts");
    const apiData = await api.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchApiData();
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((res) => setData(res))
    //   .catch((err) => console.log(err));

    // console.log(data)
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1 className="text-center text-2xl text-red-500 font-bold">
        This is for checking api
      </h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1 className="text-blue-800">{item.body}</h1>
            <h1 className="text-yellow-300">{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default One1;
