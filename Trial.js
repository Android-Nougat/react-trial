import React from 'react';

import {Line} from 'react-chartjs-2';



const state = {

  labels: ['January', 'February', 'March',

           'April', 'May'],

  datasets: [

    {

      label: 'Covid Cases',

      backgroundColor: 'transparent',

      borderColor: 'rgba(0,0,0,1)',

      borderWidth: 1,

      data: [65, 59, 80, 81, 56]

    }

  ]

}



export default class Trial extends React.Component {
constructor(props){
  super(props)

  this.state={
    data:[]
  }
}
componentDidMount(){
  



}
  render() {
    const g=this.props.data.map(q=>{
  return(
    Number(q.cases)
  )
})
  const z=this.props.data.map(q=>{
  return(
    new Date(q.date).getDate()
  )
})
state.datasets[0].data=g.sort();
state.labels=z.sort();
console.log(z)

    return (

         <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>

    );

  }

}