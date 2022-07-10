import React, { useState } from "react";
const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, settime] = useState(time);
  const UpdateTIme = () => {
    let time = new Date().toLocaleTimeString();
    settime(time);
  };
  setInterval(UpdateTIme, 1000);

  return (
    <>
      <h1>Time is</h1>
      <h2>{ctime}</h2>
    </>
  );
};
export default Clock;
