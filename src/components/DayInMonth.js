import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({appointments, state, setState} ) => {  //here too
  appointments.sort( (a,b) => a.time -b.time );

  const appointmentsJSX = appointments.map((appoint, idx) => { 
        return <AppointmentInMonth appoint={appoint} state={state} setState={setState} key={idx} />
  }
        );

  const dayTitleJSX = (
    <div>
      <span>Day: {appointments[0].date.day}</span>
      {appointmentsJSX}
    </div> 
  )

  return (
    <div className="day">
      {dayTitleJSX}
    </div>
  
  );
};
