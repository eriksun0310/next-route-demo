"use client";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);
  return (
    <div>
      {data?.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  );
};

export default Dashboard;
