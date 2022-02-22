import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./components/Calendar";
import Day from "./components/Day";

import {generateRandomAppointments, currStaff} from "./utils";


const appointments = generateRandomAppointments(2);
// console.log(currStaff);


const App = () => {
  const [state, setState] = useState({app: appointments, staff: currStaff });
  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/calendar">
              <Calendar appointments={appointments} />
            </Route>
            <Route path="/day">
              <Day appointments={appointments.filter(app => app.day !== 1)} />
            </Route>
            <Route path="/">
              <Home appointments={appointments} state={state} setState={setState} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
};
export default App;

