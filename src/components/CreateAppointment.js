import React,{useState} from 'react';

const CreateAppointment = (props) => {
    const [appointInfo, setAppointInfo] = useState({input: ""});
    const [disable, setDisable] = useState({
        operation: true,patient: false,day: true, time: true, move: true, dentist: true, assistent: true })
    const {state, setState} = props;
    let appointments = state.app;
    // console.log(state);

    const getInfo = (event) => {
        let {name, value, type} = event.target;
        value = type === "number" ? Number(value) : value //convert to number.
        const getIDs = state.app.map( ele => ele.id )
        const getUniqKey = () => {
            for(let i=0; i<= getIDs.length; i++){
              if(!getIDs.includes(i+1)){ return i+1}
            }
        }
        if(name === "operation") setDisable({...disable, move: !disable.move});
        if(name === "patient") setDisable({...disable, day: false})
        if(name === "day") setDisable({...disable, time: false})
        if(name === "time") setDisable({...disable, dentist: false})
        if(name === "dentist") setDisable({...disable, assistent: false})
        

        console.log(appointInfo);
        setAppointInfo({...appointInfo, [name] : value , id: getUniqKey(), input: value } );
    };

    const addInfo = (prev) => {
        appointments.push(appointInfo); console.log(state);
        // return {...prev, staff: appointments}
        //check if all fields are correct
        console.log("addInfo");
    };

    const listOptions = (name, inp) => { console.log("into listoptions--"+name);
        if(name === "patient" && appointInfo.patient === appointInfo.patient){// <-- 2x vergelijking patient?!?
            const clientsFound = state.clients.filter((client,idx) => {
                let firstName = client.first.toLowerCase()
                let lastName = client.last.toLowerCase()
                return  firstName.includes(inp) || lastName.includes(inp) ? true : false
            });
            return clientsFound.map( (e,idx) =>  ( <option key={idx} value={e.first+" "+e.last} ></option> ))
        }
        if(name === "time"  && appointInfo.patient !== ""  ){/// hier gebleven
            const hoursFound = state.app.filter((ele) => {
                
                let dayCheck = ele.day === appointInfo.day
                return dayCheck ? false : true;
            }); 

            console.log(state); 
            return hoursFound.map( (e,idx) =>  ( <option key={idx} value={e.time} ></option> ))
        }
        if(name === "dentist" || "assistent"){
            const dentistsFound = state.staff.filter((ele) => {
                const whichStaff = name === "dentist" ? "dentist" : "assistent"
                let staffCheck = appointInfo[whichStaff] === ele[whichStaff]
                let dayCheck = ele.day.includes(appointInfo.day) && ele.time.includes(appointInfo.time)
                return staffCheck && dayCheck ? false : true;
                // console.log(`dayCheck is ${dayCheck}`);
                // console.log(`include day ${ele.day.includes(appointInfo.day)}`);
                // console.log(`include time ${ele.day.includes(appointInfo.time)}`);
            })
            return dentistsFound.map( (e,idx) =>  ( <option key={idx} value={e.patient+" "+e.last} ></option> ))
        }
        if(name === "move"){ console.log("moving");
            const datesFound = state.app.filter((ele) => {
                const patientCheck = (ele.patient === appointInfo.patient); console.log(patientCheck);
                return patientCheck
            })
            return datesFound.map( (e,idx) =>  ( <option key={idx} > ..{e.first+" "+e.last} </option> ))
        }
        

    }
    
    
    
    return (
    <div className='makeapp'>
        <select name='operation' onChange={getInfo}>
            <option value='create'>afspraak aanmaken</option>
            <option value='move'>afspraak verzetten</option>
        </select>
        <br/>
        <input type="text" name='patient' onChange={getInfo} placeholder='Client name' list="cNames" ></input>
        <datalist id="cNames">
            {listOptions("patient",appointInfo.input)}
        </datalist> <br/>
        <select name='move' hidden={disable.move} placeholder='Verzetten van..' style={{width: "5rem"}} >
            <option value="je">hmm</option>
            {listOptions("move",appointInfo.input)}
        </select> <br/>
        <input type="number" name='day' disabled={disable.day} onChange={getInfo} placeholder='Dagnummer' min="1" max="28" style={{width: "7rem"}} ></input>
        <input type="number" name='time' disabled={disable.time} onChange={getInfo} placeholder='Uur'
            min="9" max="18" style={{width: "5rem"}} list="availables" ></input>  <br/>
        <datalist id="availables">
            {listOptions("time",appointInfo.input)}
        </datalist>
        <input type="text" name='dentist' disabled={disable.dentist} onChange={getInfo} placeholder='tandarts' list="dNames" ></input>
        <datalist id="dNames">
            {listOptions("dentist",appointInfo.input )}
        </datalist> <br/>
        <input type="text" name='assistent' disabled={disable.assistent} onChange={getInfo} placeholder='assistent' list="aNames" ></input>
        <datalist id="aNames">
            {listOptions("assistent",appointInfo.input )}
        </datalist> <br/>
        <button onClick={addInfo}>Opslaan</button>
    </div>  );
}
 
export default CreateAppointment;