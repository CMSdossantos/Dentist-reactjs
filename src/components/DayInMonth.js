import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments }) => {
  const appointmentsJSX = appointments.map(({day, time, patient }, index) => (
    <AppointmentInMonth day={day} time={time} patient={patient} key={index} />
  ));
  return <div className="day">{appointmentsJSX}</div>;
};
