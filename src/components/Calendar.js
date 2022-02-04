import React from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";

const divideByDay = appointments => {//maakt een nieuwe obj met daarin alle appointment objs met de zelfde dagNummer.
  
  let appointmentsByDay = {}; //total return is een obj die dagnum als property heeft en value DE obj.
  for(let i=1;i<29; i++){
    
    appointments.forEach(appointment => {// dit moet een for loop worden.
      if(!appointmentsByDay.hasOwnProperty(i)){
        // console.log(`${i} = app.day`);// console.log(appointment);
        appointmentsByDay[i] = [{day: i}]
      }

      if(i=== appointment.day){
        appointmentsByDay[appointment.day].push(appointment)
      }

    }); 
  }  console.log(appointmentsByDay); 
  return appointmentsByDay; 

  
};

export default ({ appointments }) => {
  const appointmentsByDay = divideByDay(appointments);

  const daysInMonthJSX = Object.values(
    appointmentsByDay
  ).map((appointmentsInDay, index) => (
      <DayInMonth appointments={appointmentsInDay} key={index} />
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
