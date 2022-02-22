import React, {useState} from 'react';
import {currStaff} from '../utils';


const Form = (props) => {
    const [FormInfo, setFormInfo] = useState({persontype: 'Tandarts'});
    const {state, setState} = props
    let staffArr = currStaff

    const getInfo = (event) => {
        const {name, value} = event.target;
        setFormInfo({...FormInfo, [name] : value} );
        console.log(FormInfo);
    };

    const addInfo = (prev) => {
        staffArr.push(FormInfo); console.log(staffArr);
        return {...prev, staff: staffArr}
        
    };

    return ( <div className='block'>
        <select name="persontype" onChange={getInfo} >
            <option>Tandarts toevoegen</option>
            <option>Assistent toevoegen</option>
            {/* <option>Client toevoegen</option> */}
        </select> <br/>
        <input name='first' onChange={getInfo} placeholder="Name" ></input> <br/>
        <input name='last' onChange={getInfo} placeholder="Last name"></input> <br/>
        <input name='email' onChange={getInfo} placeholder="Email"></input> <span>@tandartspraktijkbvt.nl </span> <br/>
        <input name='phone' onChange={getInfo} placeholder="Phone number"></input>
        
        <button onClick={() => {setState(addInfo()); console.log(state);} } > Add person </button>
    </div> );
}
 
export default Form;