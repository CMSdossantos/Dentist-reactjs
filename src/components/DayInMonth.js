import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({appointments} ) => { console.log(appointments.length); 
  const appointmentsJSX = appointments.map(({day, time, patient }, index) => (
      <div>
        <AppointmentInMonth day={day} time={time} patient={patient} key={index} len={appointments.length} />
      </div>
  ));

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
