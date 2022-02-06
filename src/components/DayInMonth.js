import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({appointments} ) => { //console.log(appointments); 
  appointments.sort( (a,b) => a.time -b.time );

  const appointmentsJSX = appointments.map(({day, time, patient, id }) => 
        <AppointmentInMonth day={day} time={time} patient={patient} key={`${id}`} />
  );

  const dayTitleJSX = (
    <div>
      <span>Day: {appointments[0].day}</span>
      {appointmentsJSX} 
    </div> 
  )

  return (
    <div className="day">
      {dayTitleJSX}
    </div>
  
  );
};
