import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({day, time, patient }) => (
  <div className="appointment">
    <div>Dag: {day}</div>
    <span className="time">{format_time(time)}</span>
    <span className="patient">{patient}</span>
  </div>
);
