import { useState } from "react";
const DisplayEach = ({ title, description, timeInSeconds }) => {
  //converting secondds to date
  const d = new Date(timeInSeconds * 1000);
  const [date, setDate] = useState();
  console.log("this is the day");
  console.log(d);
  return (
    <div>
      <p>good man</p>
      {title}
      {description}
      time{timeInSeconds}
      {d.toString()}
    </div>
  );
};

export default DisplayEach;
