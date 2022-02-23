import React from "react";

const SideSection = (props) => {
    const {state, setState} = props;

    const viewInfo = state.staff.map( (ele, idx) => {
        let firstWord = ele.persontype.split(" ")[0];
        let present = ele.present ? `aanwezig` : `afwezig`;

        const modifiedArr = state.staff.map( (obj, i) => { 
            return i === idx ? {...obj, present: !obj.present} : obj
        })
        
        return firstWord !== 'Client' ? (
            <li key={idx}>
                <button onClick={() => {setState(prev => {return ({...prev, staff: modifiedArr })}  )}}> {present} </button>
                {firstWord}: {ele.first} {ele.last}

            </li>) : null
    });
    

    return (<div className="block">
        <ul>
            {viewInfo}
        </ul>
    </div>)
}

export default SideSection;