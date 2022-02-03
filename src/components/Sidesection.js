import React from "react";

const SideSection = (props) => {

    const viewInfo = props.state.staff.map( (ele, idx) => {
        let firstWord = ele.persontype.split(" ")[0]; 
        return firstWord !== 'Client' ? (<li key={idx}>{firstWord}: {ele.sur} {ele.last}</li>) : null
 
    })

    return (<div className="block">
        <ul>
            {viewInfo}
            <li>default name</li>
            <li>another default name</li>
        </ul>
    </div>)
    
}

export default SideSection;