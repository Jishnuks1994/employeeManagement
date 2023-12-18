import React from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'react-bootstrap';
import BASE_URL from '../service/baseurl';
import { Link } from 'react-router-dom';


function TableContent({ empArray, deleteEmp }) {
    return (
        <div>

            {
                empArray.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Status</th>
                                <th>Profile</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empArray.map((i, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{i.fname + " " + i.lname}</td>
                                        <td>{i.mobile}</td>
                                        <td><Button variant={i.status == "Active" ? "info" : "warning"} className=' rounded'>{i.status}</Button></td>
                                        <td>
                                            <img style={{ width: "50px", borderRadius: "50%" }} src={`${BASE_URL}/uploads/${i.profile}`} alt="" />
                                        </td>
                                        <td>
                                            <DropdownButton id="dropdown-basic-button " title={<i class="fa-solid fa-square-caret-down"></i>}>
                                                <Link to={`/view/${i._id}`} style={{ textDecoration: 'none' }}><Dropdown.Item href="/action-1" ><i class="fa-solid fa-user fa-beat me-2"></i> View</Dropdown.Item></Link>
                                                <Link to={`/edit/${i._id}`} style={{ textDecoration: 'none' }}><Dropdown.Item href="/action-3"><i class="fa-solid fa-user-pen fa-beat me-2"></i> Edit</Dropdown.Item></Link>
                                                <Dropdown.Item onClick={() => deleteEmp(i._id)} ><i class="fa-solid fa-user-xmark fa-beat me-2"></i> Delete</Dropdown.Item>

                                            </DropdownButton>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table>
                ) : <h1 className='text-center p-5'>
                    No Employees Added yet !
                </h1>

            }



        </div>
    )
}

export default TableContent