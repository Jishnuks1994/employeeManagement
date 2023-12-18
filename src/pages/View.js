import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployee } from '../service/allApis'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import BASE_URL from '../service/baseurl'
import AdminHeader from './AdminHeader'


function View() {

    const { id } = useParams()
    // console.log(id);

    const [emp, setEmp] = useState({})

    const getEmp = async () => {
        const result = await getEmployee(id)
        // console.log(result.data);
        if (result.status >= 200 && result.status < 300) {
            setEmp(result.data)
            // console.log(emp);
        }

    }
    useEffect(() => {

        getEmp()
    }, [])

    return (
        <div>
      <AdminHeader></AdminHeader>


            <Container>
                <h1 className='text-center mt-3'>{emp.fname + " " + emp.lname}</h1>
                <Row className='my-5'>
                    <Col>
                        <img src={`${BASE_URL}/uploads/${emp.profile}`} alt="user_Image" />
                    </Col>
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item><b className='me-5'>First Name :</b>  {emp.fname}</ListGroup.Item>
                            <ListGroup.Item><b className='me-5'>Last Name :</b> {emp.lname}</ListGroup.Item>
                            <ListGroup.Item><b className='me-5'>Email :</b>  {emp.email}</ListGroup.Item>
                            <ListGroup.Item><b className='me-5'>Mobile :</b>  {emp.mobile}</ListGroup.Item>
                            <ListGroup.Item><b className='me-5'>Gender :</b>  {emp.gender}</ListGroup.Item>
                            <ListGroup.Item><b className='me-5'>Status :</b>  {emp.status}</ListGroup.Item>
                            <ListGroup.Item><b className='me-5'>Location :</b>  {emp.location} </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default View