import React, {useState} from 'react';
// import Home from '../Home.js';


const Form = (props) => {
    const [FormInfo, setFormInfo] = useState({persontype: 'Tandarts toevoegen'});
    let staffArr = props.state.staff;

    const getInfo = (event) => {
        const {name, value} = event.target;
        setFormInfo({...FormInfo, [name] : value} );
        // console.log(FormInfo);
    };

    const addInfo = (prev) =>{
        staffArr.push(FormInfo);
        return {...prev, staff: staffArr}
        
    };

    return ( <div className='block'>
        <select name="persontype" onChange={getInfo} >
            <option>Tandarts toevoegen</option>
            <option>Assistent toevoegen</option>
            <option name="testing">Client toevoegen</option>
        </select> <br/>
        <input name='first' onChange={getInfo} placeholder="Surname" ></input> <br/>
        <input name='last' onChange={getInfo} placeholder="Last name"></input> <br/>
        <input name='email' onChange={getInfo} placeholder="email"></input> <span>@tandartspraktijkbvt.nl </span> <br/>
        <input name='phone' onChange={getInfo} placeholder="Phone number"></input>
        
        <button onClick={() => {props.setState(addInfo()); console.log(props.state) } } > Add person </button>
    </div> );
}
 
export default Form;