import React from "react";
// const hasPatient = patient => 
const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);
const showInfo = (time,day) => day  ? format_time(time) : null;

export default ({day, time, patient, }) => {
  const showAny = patient ? <span className="patient">{patient}</span> : null

  return(
    <div className="appointment">
      <span className="time">{showInfo(time, patient)}</span>
      {showAny}
    </div>
  );
}
