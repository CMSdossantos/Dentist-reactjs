import React, {useState} from 'react';

const Form = (props) => {
    const [formInfo, setFormInfo] = useState({persontype: 'dentist'});
    const {state, setState} = props
    // let staffArr = state.staff;
    // let clientsArr = state.clients;

    const getInfo = (event) => {
        const {name, value} = event.target;
        setFormInfo({...formInfo, [name] : value} );
        console.log(formInfo);
    };

    const addInfo = (prev) => {
        if(formInfo.persontype === 'client'){
            let clientsArr = prev.clients
            clientsArr.push(formInfo); 
            return {...prev, clients: clientsArr}
        } else {
            let staffArr = prev.staff
            staffArr.push(formInfo);
            return {...prev, staff: staffArr}
        }
    };

    return ( <div className='block'>
        <select name="persontype" onChange={getInfo} >
            <option value='dentist'>Tandarts toevoegen</option>
            <option value='assistent'>Assistent toevoegen</option>
            <option value='client' >Client toevoegen</option>
        </select> <br/>
        <input name='first' onChange={getInfo} placeholder="Name" required></input> <br/>
        <input name='last' onChange={getInfo} placeholder="Last name" required></input> <br/>
        <input name='email' onChange={getInfo} placeholder="Email"></input> <span>@tandartspraktijkbvt.nl </span> <br/>
        <input name='phone' onChange={getInfo} placeholder="Phone number"></input> <br/>
        <input name='birthdate' type='number'  min='1940' max='2015' placeholder='geb. jaar' onChange={getInfo} ></input>
        
        <button onClick={() => { setState(prev => addInfo(prev)) } } > Persoon opslaan </button>
    </div> );
}
 
export default Form;