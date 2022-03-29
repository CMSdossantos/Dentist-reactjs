import React, {useState} from 'react';

const Form = (props) => {
    const [FormInfo, setFormInfo] = useState({persontype: 'Tandarts'});
    const {state, setState} = props
    let staffArr = state.staff; 

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
            <option value='Tandarts'>Tandarts toevoegen</option>
            <option value='Assistent'>Assistent toevoegen</option>
            <option value='Client' >Client toevoegen</option>
        </select> <br/>
        <input name='first' onChange={getInfo} placeholder="Name" required></input> <br/>
        <input name='last' onChange={getInfo} placeholder="Last name" required></input> <br/>
        <input name='email' onChange={getInfo} placeholder="Email"></input> <span>@tandartspraktijkbvt.nl </span> <br/>
        <input name='phone' onChange={getInfo} placeholder="Phone number"></input> <br/>
        <input name='birthdate' type='number'  min='1940' max='2015' placeholder='geb. jaar' onChange={getInfo} ></input>
        
        <button onClick={() => {setState(addInfo()); console.log(state);} } > Persoon opslaan </button>
    </div> );
}
 
export default Form;