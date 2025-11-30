import Background from "../../components/Background";
import "./Project.css";
import React, { useState } from "react";
import Card from "../../components/Card";
import { useRef } from "react";

const Project = () => {
  const ref = useRef(null);

  const data = [
    {
      projectName : "Mern-Auth-App",
      projectDesc : "This is an end to end MERN auth app",
      projecLink : "https://github.com/Codewithpabitra/MERN-AUTH"
    },
    {
      projectName : "Carbon Footprint Count",
      projectDesc : "This app helps to calculate Carbon footprint",
      projecLink : "https://github.com/Codewithpabitra/green-carbon-count"
    },
    {
      projectName : "Cool Docs Website",
      projectDesc : "This is a cool docs website",
      projecLink : "https://github.com/Codewithpabitra/Cool-Docs-Website"
    },
    {
      projectName : "Socket.IO Chill",
      projectDesc : "This is complete socket.io course",
      projecLink : "https://github.com/Codewithpabitra/Socket.IO-Chill"
    }
  ];

  return (
    <div
      ref={ref}
      className="w-full h-screen bg-zinc-800 relative border-2  border-blue-500 rounded-xl flex gap-10 flex-wrap "
    >
      <Background />
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}

    </div>
  );
};

export default Project;
