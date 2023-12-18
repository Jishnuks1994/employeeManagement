import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { adminLoginApi } from '../service/allApis';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Login() {

  //state to validate email input
  const [emailValid, setEmailValid] = useState(true)

  //state to validate psw input
  const [pswValid, setPswValid] = useState(true)
  //state to hold inputs
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    psw: ""
  })


  const setInputs = (e) => {
    const { value, name } = e.target

    if (name == 'email') {
      if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

        setEmailValid(true)
        setLoginInputs({ ...loginInputs, [name]: value })

      }
      else {
        setEmailValid(false)
      }

    }
    if (name == 'psw') {
      if (value.match(/^[a-zA-Z0-9!@#$%^&*]+$/)) {
        setPswValid(true)
        setLoginInputs({ ...loginInputs, [name]: value })
      }
      else {
        setPswValid(false)
      }

    }
  }
  // console.log(loginInputs);
  const navigate = useNavigate()
  const handleSubmit = async () => {
    const { email, psw } = loginInputs

    if (email == "" || psw == "") {
      alert('All Inputs are Required')
    }
    else {
      const result = await adminLoginApi(loginInputs)

      if (result.status >= 200 && result.status < 300) {
        // alert(result.data)
        const notify = () => toast(result.data);
        navigate('/home')

      }
      else {
        alert(result.response.data)
      }

    }

  }
  return (
    <div>
      <Container className='my-5'>
        <Row className=' align-items-center'>
          <Col lg={8} md={6} sm={6}><img src="https://i.postimg.cc/NMCVxsyS/jet-animation.gif" alt="" width={"100%"} /></Col>
          <Col lg={4} md={6} sm={6} class="form-group border p-2 my-5">
            <h2 className='text-center'>Admin Login</h2>
            <>

              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control onChange={(e) => setInputs(e)} name="email" type="email" placeholder="name@example.com" />
              </FloatingLabel>
              {!emailValid && <div>
                <p className='text-danger'>Invalid Email</p>
              </div>}
              <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
                <Form.Control onChange={(e) => setInputs(e)} name="psw" type="password" placeholder="Password" />
              </FloatingLabel>
              {!pswValid && <div>
                <p className='text-danger'>Invalid Password</p>
              </div>}
            </>
            <div className='text-center mt-3 mb-5'><Button onClick={handleSubmit} className='btn btn-warning w-75'>Sign In</Button></div>

          </Col>
        </Row>

      </Container>
      <ToastContainer />
    </div>
  )
}

export default Login