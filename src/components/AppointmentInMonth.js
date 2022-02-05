import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);
const showInfo = (time,day) => day  ? format_time(time) : null;

export default ({ time, patient, id }, key) => {
  const showAny = patient ? <span className="patient" key={id} >{patient}</span> : null;
  

  return(
    <div className="appointment">
      <span className="time">{showInfo(time, patient)}</span>
      {showAny}
    </div>
  );
}
