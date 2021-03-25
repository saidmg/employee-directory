import React from 'react'
import { Jumbotron } from'react-bootstrap';
function About() {
    return <div>
          <Jumbotron style={{marginTop:'10%', marginBottom:'0',color: 'white', backgroundImage: 'linear-gradient(300deg, #24282c, rgb(102 102 101))'}}>
    <h1 style={{textAlign:'center'}}>Employee directory</h1>
    <h4 style={{textAlign:'center', marginTop:'5%'}}>
    This app was made for employees or managers to give them access to viewing non-sensitive data about other employees. 
    </h4>
    <h4 style={{textAlign:'center'}}>
      For testing purpose, a table of random users is generated from (https://randomuser.me/)
    </h4>
 
  </Jumbotron>
  </div>
}

export default About;