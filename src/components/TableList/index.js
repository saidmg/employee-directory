import React from 'react';
import { Container, Table, Image } from 'react-bootstrap';

function TableList(props) {

  return (
    <Container fluid >
      {console.log('props2', props.result)}

      <Table striped bordered hover variant="dark" responsive size="sm">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Username</th>
            <th>First Name
            <button onClick={props.sortEmployees} style={{backgroundColor:'transparent', border:'0%',marginLeft:'5%'}}>
                  <i id='first' className="fas fa-sort" style={{color:'white'}}></i>
              </button>
            </th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Cell</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.result.map((employee) =>
            <tr key={employee.login.uuid}>
              <td>
                <Image src={employee.picture.medium} rounded />
              </td>
              <td>{employee.login.username}</td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.dob.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.location.country}</td>
              <td>{employee.cell}</td>
              <td>{employee.email}</td>
            </tr>)}

        </tbody>
      </Table>
      { (props.result.length === 0)? <h3 style = {{textAlign :'center'}}>There is no employee name containing that search input</h3> : ""
      }
    </Container>
  )

}
export default TableList;