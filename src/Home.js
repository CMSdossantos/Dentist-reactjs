import React from "react";
import "./App.css";
import "./Home.css";
import Form from "./components/Form";
import SideSection from "./components/Sidesection";
import CreateAppointment from "./components/CreateAppointment";

export default (props) => { 

    return (<div>
        <div style={{display: "flex"}} >
            <Form  state={props.state} setState={props.setState} />
            <SideSection state={props.state} setState={props.setState} /> 
        </div>
        <div style={{display: "flex"}} >
            <CreateAppointment state={props.state} setState={props.setState} />
            
            
        </div><div style={{display: "flex"}}> <div></div> </div>
    </div>
    )

}
