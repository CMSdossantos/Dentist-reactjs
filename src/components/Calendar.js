import React from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";

const divideByDay = appointments => {//maakt een nieuwe obj met daarin alle appointment objs met de zelfde dagNummer.
  
  let appointmentsByDay = {}; //total return is een obj die dagnum als property heeft en value DE obj.
  for(let i=1;i<29; i++){
    
    appointments.forEach(appointment => {
      if(!appointmentsByDay.hasOwnProperty(i)){
        appointmentsByDay[i] = [{day: i}]
      }

      if(i=== appointment.day){
        appointmentsByDay[appointment.day].push(appointment)
      }

    }); 
  }  
  return appointmentsByDay; 
  
};

export default ({ state }) => {// <-- appointments changed to state
  const appointmentsByDay = divideByDay(state.app);// here too

  const daysInMonthJSX = Object.values(
    appointmentsByDay
  ).map((appointmentsInDay, index) => (
      <DayInMonth appointments={appointmentsInDay} staff={state.staff} key={index} />
  ));// console.log(daysInMonthJSX);
   

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
