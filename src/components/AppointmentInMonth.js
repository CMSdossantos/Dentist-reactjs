import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);
const showInfo = (time,patient) => patient  ? format_time(time) : null;


export default ( {appoint, staff }, idx ) => {

  const chosenStaff = staff.find(ele => ele.first+" "+ ele.last === appoint.dentist) ;
  const presentcss = typeof chosenStaff !== "undefined" && chosenStaff.present ? null : {background: "tomato"}; 
  
  

  const showAny = appoint.patient ? <span style={presentcss} className="patient" key={idx} >{appoint.patient}</span> : null;
  

  return(
    <div className="appointment">
      <span className="time">{showInfo(appoint.time, appoint.patient)}</span>
      {showAny}
    </div>
  );
}
