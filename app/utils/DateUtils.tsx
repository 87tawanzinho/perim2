"use client"; // components/CurrentDate.js
import React from "react";
import moment from "moment";
import "moment/locale/pt-br"; // Para exibir a data em português

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = React.useState(
    moment().format("dddd, D [de] MMMM")
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(moment().format("dddd, D [de] MMMM"));
    }, 1000 * 60 * 60 * 24); // Atualiza a cada 24 horas

    return () => clearInterval(intervalId);
  }, []);

  return <p>{currentDate}</p>;
};

export default CurrentDate;
