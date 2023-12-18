import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Form } from 'react-bootstrap'
import TableContent from './TableContent'
import { registerContext, updateContext } from '../components/ContextShare'
import Alert from 'react-bootstrap/Alert';
import { deleteEmployee, filterStatus, getAllEmployee } from '../service/allApis';
import AdminHeader from './AdminHeader';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';




function Employees() {

  const { registerUpdate, setRegisterUpdate } = useContext(registerContext)
  const {updateStatus, setUpdateStatus}=useContext(updateContext)
  const [employees,setEmployees]=useState([])
  const [searchData,setSearchData]=useState("")
  // console.log(searchData);

  const getEmployees=async()=>{
    const result=await getAllEmployee(searchData)
    // console.log(result.data);
    setEmployees(result.data)
    
  }

  //delete function
  const removeEmployee=async(id)=>{
   const result= await deleteEmployee(id)
   if(result.status>=200 && result.status<300){
    getEmployees()
   }
   
  }

  //filter employees
  const filterEmployees=async(data)=>{
    const result=await filterStatus(data)
    // console.log(result.data);
    setEmployees(result.data)
  }



 
  useEffect(()=>{
    getEmployees()
  },[searchData])

  return (
    <div>
      <AdminHeader></AdminHeader>

      {
        registerUpdate ?
          <Alert  className=' container w-50 mt-3' variant={"success"} dismissible onClose={()=>setRegisterUpdate("")} >
            {registerUpdate} is added successfully
          </Alert>
          : ""
      }
      {updateStatus?
      <Alert className=' container w-50 mt-3' variant={"success"} dismissible onClose={()=>setUpdateStatus("")}>
        {updateStatus.fname+" "+updateStatus.lname} is Updated Successfully
      </Alert>
      :""
   }

      <Container className='my-3'>
        <Form inline>
          
        
           
                <Form.Control
                onChange={(e)=>setSearchData(e.target.value)}
                  type="text"
                  placeholder="Search Employees"
                  className=" mr-sm-2 text-end"
                />
              
           
        
        </Form>
      </Container>

      <div className=' mt-5 text-end container'>
        <h6>Filter Employees</h6>
        <ButtonGroup aria-label="Basic example">
        <Button onClick={()=>filterEmployees('Active')} variant="info">Active</Button>
        <Button onClick={()=>filterEmployees('Inactive')} variant="warning">Inactive</Button>
        <Button  onClick={getEmployees} variant="success">All Data</Button>
      </ButtonGroup>
      </div>

      <Container className='text-center mt-2 mb-5'>

        <TableContent deleteEmp={removeEmployee} empArray={employees}></TableContent>
      </Container>
    </div>
  )
}

export default Employees