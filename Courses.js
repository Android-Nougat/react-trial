import React from 'react';
import React, { useState, useEffect } from 'react';
import { Query } from "react-apollo";
import Course from './Course';
import gql from "graphql-tag";
import Trial from './Trial'
import Hello from './Hello'
import DisplayMapClass from './DisplayMapClass'
const h=` country(name: "India") {
    states {
      state
      cases
      deaths
      recovered
    }

       historical(reverse: true, count: 30) {
      date
      cases
    }
  
  }`
function Courses () {

    const [count, setCount] = useState(h);
    const [data,setData]=useState([])
    const [cntry, setCase] = useState(true);
// useEffect(()=>{
// cntry=false
// alert(cntry)
// })
return(

 
  cntry===true ?
  <Query
    query={gql`
      {
     ${count}
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      if(data){
     
      }
      

  return(
   
      <div style={{marginLeft:"0%" ,display:"grid",gridTemplateColumns:"1fr ",width:"100%"}}>
      
    <div>
  <Trial data={data.country.historical}/></div>
    <table>

  <tr>
    <th>State</th>
    <th>Cases</th>
    <th>Deaths</th>
    <th>Recovered</th>
  </tr>


  { data.country.states.map((currentCourse) => (


<tr>

<td onClick={
  
  ()=>{
    
   
    setCount(`  state(countryName: "India", stateName: "${currentCourse.state==="State Unassigned"?"Uttar Pradesh":currentCourse.state}") {
    state
    cases
    deaths
    districts {
      district
      cases
      deaths
    }
       historical(reverse: true, count: 30) {
      date
      cases
    }

  }`)
   setCase(false)
    alert(cntry)
  }}>{currentCourse.state==="State Unassigned"?"Uttar Pradesh":currentCourse.state}</td>
    <td>{currentCourse.cases}</td>
    <td>{currentCourse.deaths}</td>
  <td>{currentCourse.recovered}</td>
</tr>
))}</table>

<DisplayMapClass data={ data.country.states} style={{width:"100%"}}/>
</div>
    
);
    }}
  </Query>
  :<Query
    query={gql`
      {
     ${count}
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
     console.log(data)
      

  return(
   <div style={{marginLeft:"10%",display:"grid",gridTemplateColumns:"1fr"}}>
    <div onClick={()=>{setCase(true)
    
    setCount(h)
    }
    
    }>State wise figure


    <Trial data={data.state.historical}/>
    <table>

  <tr>
    <th>State</th>
    <th>Cases</th>
    <th>Deaths</th>

  </tr>
  <tr>
<td>{data.state.state}</td>
<td>{data.state.cases}</td>
<td>{data.state.deaths}</td>
  </tr>
  


  { data.state.districts.map((currentCourse) => (


<tr>

<td onClick={
  
  ()=>{

    alert(cntry);
    setCount(`  state(countryName: "India", stateName: "${currentCourse.state}") {
    state
    cases
    deaths
    districts {
      district
      cases
      deaths
    }
  }`)}}>{currentCourse.district}</td>
    <td>{currentCourse.cases}</td>
    <td>{currentCourse.deaths}</td>

</tr>
))}</table>

    </div>
    
    </div>
);
    }}
    
  </Query>
);}
export default Courses;

//  <Course course={currentCourse} onClick={()=>console.log(2)}/>