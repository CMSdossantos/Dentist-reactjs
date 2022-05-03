import React from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";

const divideByDay = appointments => {//maakt een nieuwe obj met daarin alle appointment objs met de zelfde dagNummer.
  
  let appointmentsByDay = {}; //total return is een obj die dagnum als property heeft en value DE obj.
  for(let i=1;i<=28; i++){
    if(i%7%6 !== 0){ 

      appointments.forEach(appointment => {
          if(!appointmentsByDay.hasOwnProperty(i)){
            appointmentsByDay[i] = [{date: {day : i}}]
          } else
  
          if(i=== appointment.date.day){ 
            appointmentsByDay[appointment.date.day].push(appointment)
          }
      }); 
    }
  };
  return appointmentsByDay; 
  
};

export default ({ state, setState }) => {// <-- appointments changed to state
  const appointmentsByDay = divideByDay(state.app);   // here too

  const daysInMonthJSX = Object.values(
    appointmentsByDay
  ).map((appointmentsInDay, index) => (
      <DayInMonth appointments={appointmentsInDay} state={state} setState={setState} key={index} />
  ));
   

  return (
    <div className="calendarview">
      <div className="header">
        <div>Maandag</div>
        <div>Dinsdag</div>
        <div>Woensdag</div>
        <div>Donderdag</div>
        <div>Vrijdag</div>
      </div>
      <div className="table">{daysInMonthJSX}</div>
    </div>
  );
};
