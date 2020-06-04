import React from 'react';
import './style.css'
const Symptoms=()=>{


  return(
    <div className="container">
    
    
<div className="cards" style={{color:"white"}}>
<ul style={{background:"yellow"}}>
<h3 >Most common symptoms:</h3>
<li>Fever</li>
<li>Cough</li>
<li>Tiredness</li>
</ul>
</div>
<div className="cards" >
<ul style={{background:"orange"}}>
<h3>Less common symptoms:</h3>
<li>Aches and pain</li>
<li>Sore throat</li>
<li>Diarrhoea</li>
<li>Conjunctivitis</li>
<li>Headache</li>
<li>Loss of taste or smell</li>
<li>a rash on skin, or discolouration of fingers or toes.</li>
</ul>

</div>

<div className="cards" >
<ul style={{background:"red",color:"white"}}>
<h3>Serious symptoms:</h3>
<li>difficulty breathing or shortness of breath.</li>
<li>chest pain or pressure.</li>
<li>loss of speech or movement.</li>
</ul>


</div>
<article className="cards" ><h6>If you are experiencing these symptoms..</h6>
<br/>
<p>Contact the national helpline number:  <a href="tel:+91-11-23978046">+91-11-23978046</a></p><br/>

<br/>
<p>Contact the national helpline mailto:   <a href="mailto:ncov2019@gov.in">ncov2019@gov.in</a></p>

<br/>
</article>
    </div>
  )
}



export default Symptoms;