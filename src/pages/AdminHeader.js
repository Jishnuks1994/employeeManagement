import React from 'react'
import Nav from 'react-bootstrap/Nav';

function AdminHeader() {
  return (
    <div>
         <Nav
      
     
    >
     
          <Nav.Item>
            <Nav.Link  href="/home">Home</Nav.Link>
          </Nav.Item>
      
      <Nav.Item>
        <Nav.Link href='/add-new'  >Add Employee</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/employees-mng' >List Employee</Nav.Link>
      </Nav.Item>
      
    </Nav>
    </div>
  )
}

export default AdminHeader