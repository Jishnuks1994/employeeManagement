import React from 'react'
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminHeader from './AdminHeader'




function AdminHome() {
  return (
    <div>
      <AdminHeader></AdminHeader>

      <Container className='my-3'>
        <Form inline>
          <Row>
            <Col lg={9} md={9} sm={9} className='mt-3'>
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto" lg={3} md={3} sm={3} className='mt-3 '>
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container>
        <Row>
        <Col className='py-2' lg={6} md={6} sm={6}>
            <img  src="https://i.postimg.cc/MKpknH8J/5f68b182401f939c16df7075-BOTH-CUSTOMER-SERVICEDESK-ANI.gif" style={{ width: '80%' }} alt="" />

          </Col>
          <Col className=' mt-5' lg={6} md={6} sm={6} >

            <h1>Make Employees management easy </h1>
            <p className='fs-4'>The Employe Desk is Designed To Integrate All Of These Necessory Elements</p>

          </Col>
          
        </Row>
      </Container>

      <Container className='my-5'>
        <Row >
          <Col  className='my-5' lg={6} md={6} sm={6}>
           <Link to={'/add-new'} style={{textDecoration:'none'}}>
              <Card >
              <Card.Img variant="top" src="https://i.postimg.cc/y8VYLs9V/come-join-the-team-500-wht-10876.gif" />
                <Card.Body>
                  <Card.Title>Add New Employee</Card.Title>
  
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                
                </Card.Body>
              </Card>
           </Link>
          </Col>

          <Col className='my-5' lg={6} md={6} sm={6}>
            <Link to={'/employees-mng'} style={{textDecoration:'none'}}>
              <Card >
              <Card.Img variant="top" src="https://i.postimg.cc/8CcMcq1b/Interaction.gif" />
                <Card.Body>
                  <Card.Title>Manage Employees</Card.Title>
                  
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>



    </div>
  )
}

export default AdminHome