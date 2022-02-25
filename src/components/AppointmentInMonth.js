import React from "react";
import "./Calendar.css";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);
const showInfo = (time,patient) => patient  ? format_time(time) : null;


export default ( {appoint, state, setState }, idx ) => {

  const chosenStaff = state.staff.find(ele => ele.first+" "+ ele.last === appoint.dentist) ;
  const presentcss = typeof chosenStaff !== "undefined" && chosenStaff.present ? null : {background: "tomato"};
  // const listValue = (event) => console.log(event.target.parentNode.name); console.log(listValue);

  const removeAppoint = id => {
    const reducedArray = state.app.filter( (elem) => elem.id === id ? false : true )
    setState((prev) => {return ({...prev, app: reducedArray}) }  ) ;
    
  }
  

  const showAny = appoint.patient ? (<span name={"haha"} style={presentcss} className="patient" key={idx} >{appoint.patient}
     <button className="del" onClick={() => removeAppoint(appoint.id)}>x</button> </span>) : null;
  

  return(
    <div className="appointment">
      <span className="time">{showInfo(appoint.time, appoint.patient)}</span>
      {showAny}
    </div>
  );
}
