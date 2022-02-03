import React from "react";
import "./App.css";
import "./Home.css";
import Form from "./components/Form";
import SideSection from "./components/Sidesection";

export default (props) => { 

    return (<div style={{display: "flex"}} >
        <Form state={props.state} setState={props.setState} />
        <SideSection state={props.state} />
        <span>{console.log(props.state.staff)}</span>
    </div>)

}
