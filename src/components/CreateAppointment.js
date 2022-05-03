import React,{useState} from 'react';

const CreateAppointment = (props) => {
    const [appointInfo, setAppointInfo] = useState({operation: "create"});
    const [disable, setDisable] = useState({
        operation: true,patient: false,day: true, time: true, move: true, dentist: true, assistent: true })
    const {state, setState} = props;
    let appointments = state.app;
    

    const getInfo = (event) => {
        let {name, value, type} = event.target;
        value = type === "number" ? Number(value) : value //convert to number.
        const getIDs = state.app.map( ele => ele.id )
        const getUniqKey = () => {
            for(let i=0; i<= getIDs.length; i++){
              if(!getIDs.includes(i+1)){ return i+1 }
            }
        }
        if(name === "operation") setDisable({...disable, move: !disable.move});
        if(name === "patient") setDisable({...disable, day: false})
        if(name === "day") setDisable({...disable, time: false})
        if(name === "time") setDisable({...disable, dentist: false})
        if(name === "dentist") setDisable({...disable, assistent: false})
        
        if(name === "move"){console.log(value,"<-- is this id?");   }
        
        setAppointInfo({...appointInfo, [name] : value , id: getUniqKey(), input: value } );
    };

    const addInfo2 = (prev) => { 
        let isClient = prev.clients.some( (e) => e.first+" "+e.last === appointInfo.patient );
        let isDentist = prev.staff.some( (e) =>  e.first+" "+e.last === appointInfo.dentist);
        let isAssistent = prev.staff.some( (e) =>  e.first+" "+e.last === appointInfo.assistent || appointInfo.isAssistent === undefined);
        let isDate = prev.app.some( (e) => e.date.day === appointInfo.day && e.date.time === appointInfo.time );

        console.log(appointInfo.assistent !== undefined, appointInfo.assistent);
        
        if(isClient && isDentist && isAssistent && !isDate){ console.log("addInfo"); 
            
            const formatObj = {
                date: {day: appointInfo.day, time: appointInfo.time},
                id: appointInfo.id,
                patient: appointInfo.patient,
                dentist: appointInfo.dentist,
                assistent: appointInfo.assistent,
                phone: prev.clients.find((e) => appointInfo.patient === e.first ) ,
                email: "randomname@gmail.com",
            };
            appointments.push(formatObj);

            if(appointInfo.operation === "move"){
                let updatedArray = appointments.filter((e) => {
                
                    return e.id === Number(appointInfo.move) ? false : true;
                
                }); console.log(updatedArray);
                return {...prev, app: updatedArray}
            }

            return {...prev, app: appointments } 
        } else {
            if(!isClient){alert(`Naam niet in clientbestand.`)}
            if(!isDentist){alert(`Geen geldige tandarts`)}
            if(!isAssistent && appointInfo.assistent !== ''){alert(`Geen geldige assistent.`)}
        }
        return {...prev}
    };

    const listOptions = (name, inp) => {
        if(name === "patient" ){ 
            const clientsFound = state.clients.filter((client,idx) => {
                let firstName = client.first.toLowerCase()
                let lastName = client.last.toLowerCase()
                return  firstName.includes(inp) || lastName.includes(inp) ? true : false
            });
            return clientsFound.map( (e,idx) =>  ( <option key={idx} value={e.first+" "+e.last} ></option> ))
        }
        if(name === "time"  && appointInfo.patient ){
            const hoursFound = state.app.filter((ele) => {
                
                let dayCheck = ele.date.day === appointInfo.day
                return dayCheck ? false : true;
            });
            return hoursFound.map( (e,idx) =>  ( <option key={idx} value={e.date.time} ></option> ))
        }
        if(name === "dentist" || name === "assistent"){ 
            const dentistsFound = state.staff.filter((ele) => {
                const whichStaff = name === "dentist" ? "dentist" : "assistent";
                let obj = {day: appointInfo.day, time: appointInfo.time}
                
                let staffCheck = whichStaff === ele.persontype && ele.persontype !== undefined; 

                let dayCheck = () => {
                    if(ele.hasOwnProperty("day")){
                        return ele.date.some((e) => e.day === obj.day && e.time === obj.time)
                    }
                }
                dayCheck()

                return staffCheck && dayCheck ? false : true;
            })

            return dentistsFound.map( (e,idx) =>  ( <option key={idx} value={e.first+" "+e.last} ></option> ))
        }
        if(name === "move"){
            const datesFound = state.app.filter((ele) => {
                const patientCheck = (ele.patient === appointInfo.patient);
                return patientCheck
            });
            return datesFound.map( (e,idx) =>  ( <option key={idx} value={e.id} > Verzetten van: dag:{e.date.day} uur:{e.date.time} </option> ))
        }
            

    }
    
    
    
    return (
    <div className='makeapp'>
        <select name='operation' onChange={getInfo}>
            <option value='create'>afspraak aanmaken</option>
            <option value='move'>afspraak verzetten</option>
        </select>
        <br/>
        <input type="text" name='patient' onFocus={getInfo} onChange={getInfo} placeholder='Client name' list="cNames"  ></input>
        <datalist id="cNames">
            {listOptions("patient",appointInfo.input)}
        </datalist> <br/>
        <select name="move" hidden={disable.move} onChange={getInfo} style={{width: "13rem"}} >
            <option value="xx">Verzetten van..</option>
            {listOptions("move",appointInfo.input)}
        </select> <br/>
        <input type="number" name='day' disabled={disable.day} onChange={getInfo} placeholder='Dagnummer' min="1" max="28" style={{width: "7rem"}} required ></input>
        <input type="number" name='time' disabled={disable.time} onChange={getInfo} placeholder='Uur'
            min="9" max="18" style={{width: "5rem"}} list="availables" ></input>  <br/>
        <datalist id="availables">
            {listOptions("time",appointInfo.input)}
        </datalist>
        <input type="text" name='dentist' disabled={disable.dentist} onChange={getInfo} placeholder='tandarts' list="dNames"  ></input>
        <datalist id="dNames">
            {listOptions("dentist",appointInfo.input )}
        </datalist> <br/>
        <input type="text" name='assistent' disabled={disable.assistent} onChange={getInfo} placeholder='assistent' list="aNames" ></input>
        <datalist id="aNames">
            <option value="geen assistent"> Geen assistent</option>
            {listOptions("assistent",appointInfo.input )}
        </datalist> <br/>
        <button onClick={ () => {setState(prev => addInfo2(prev)) } } >Opslaan</button>
    </div>  ); 
}
 
export default CreateAppointment;