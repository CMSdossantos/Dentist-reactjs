import React from "react";

const SideSection = (props) => {
    const viewInfo = props.state.staff.map( (ele, idx) => {
        let firstWord = ele.persontype.split(" ")[0]; 
        return firstWord !== 'Client' ? (<li key={idx}>{firstWord}: {ele.first} {ele.last}</li>) : null
    })

    return (<div className="block">
        <ul>
            {viewInfo}
        </ul>
    </div>)
}

export default SideSection;