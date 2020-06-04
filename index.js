import React, { Component } from 'react';
import { render } from 'react-dom';
import Precautions from './Precautions';
import './style.css';
import React, { useState } from 'react';
import  About from './About';
import Hello from './Hello';
import Symptoms from './Symptoms'
import Statistics from './Statistics'

import DisplayMapClass from './DisplayMapClass'
import Trial from './Trial'
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const st={padding:2,boxShadow:"2px 2px 2px 2px grey",borderRadius:"10%",margin:"2vw"}
const App = () => 
 (
      <BrowserRouter>
    
      <div className="mobile">

      
<nav style={{display:"flex",justifyContent:"flex-end"}}>

<Link className="nav" to="/symptoms" style={{underline:"none"} } style={st}>Symptoms</Link>
<Link className="nav" to="/precautions" style={{underline:"none"} } style={st}>Precautions</Link>
<Link className="nav" to="/about" style={{underline:"none"} } style={st}>About</Link>
<Link className="nav" to="/statistics" style={{underline:"none"} } style={st}>Statistics</Link>
</nav>
<Switch>

<Route exact path="/home" component={Hello} />
<Route path="/symptoms" component={Symptoms}/>
<Route path="/precautions" component={Precautions}/>
<Route path="/about" component={About}/>

<Route path="/statistics" component={Statistics}/>
</Switch>
       </div>

      </BrowserRouter>
    );
render(<App />, document.getElementById('root'));
