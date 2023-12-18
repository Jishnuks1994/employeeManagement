import React, { useContext, useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  ToastContainer,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getEmployee, updateEmployee } from "../service/allApis";
import BASE_URL from "../service/baseurl";
import { updateContext } from "../components/ContextShare";


function Edit() {
  //state for validations
  const [fnameValid, setfnameValid] = useState(true);
  const [lnameValid, setlnameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [mobileValid, setMobileValid] = useState(true);
  const [locationValid, setLocationValid] = useState(true);

  const navigate = useNavigate();


  const {setUpdateStatus}=useContext(updateContext)

  //state to hold form inputs
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    status: "",
    mobile: "",
    location: "",
    gender: "",
    email: "",
  });

  //state to store image

  const [image, setImage] = useState("");

  // console.log(image);

  const setData = (e) => {
    const { value, name } = e.target;
    if (name == "fname") {
      if (value.match(/^[a-zA-Z ]*$/)) {
        setfnameValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setfnameValid(false);
      }
    }

    if (name == "lname") {
      if (value.match(/^[a-zA-Z ]*$/)) {
        setlnameValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setlnameValid(false);
      }
    }

    if (name == "email") {
      if (
        value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*@*[a-zA-Z0-9]*(?:\.[a-zA-Z0-9]*)*$/
        )
      ) {
        setEmailValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setEmailValid(false);
      }
    }

    if (name == "mobile") {
      if (value === "" || value.match(/^[0-9]{0,12}$/)) {
        setMobileValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setMobileValid(false);
      }
    }

    if (name == "location") {
      if (value.match(/^[a-zA-Z0-9 ]*$/)) {
        setLocationValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setLocationValid(false);
      }
    }

    if (name == "gender" || name == "status") {
      setInputs({ ...inputs, [name]: value });
    }
  };

  // state to hold imahe preview url
  const [imagePreview, setImagePreview] = useState("");

  const { id } = useParams();

  //function to gt employe data
  const getEmployeeData = async () => {
    const result = await getEmployee(id);
    setInputs(result.data);
  };

  useEffect(() => {
    getEmployeeData();
  }, []);
  // console.log(inputs);

  useEffect(() => {
    if (image) {
      // console.log(URL.createObjectURL(image));
      setImagePreview(URL.createObjectURL(image));
    }
  }, [image]);

  const imageChoose = (e) => {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  console.log(inputs);

  //state to hold error message from backend
  const [errorMessage, setErrorMessage] = useState();

  const HandleEdit = async (e) => {
    // e.preventDefault() used to prevent data loss in inputs while clicking sumbit button
    e.preventDefault();
    // alert('button clicked')
    const { fname, lname, gender, status, email, location, mobile } = inputs;

    if (fname == "") {
      toast.error("please enter first name");
    }
    if (lname == "") {
      toast.error("please enter last name");
    }
    if (gender == "") {
      toast.error("please enter gender");
    }
    if (status == "") {
      toast.error("please enter status");
    }
    if (email == "") {
      toast.error("please enter email");
    }
    if (location == "") {
      toast.error("please enter location");
    }
    if (mobile == "") {
      toast.error("please enter mobile number");
    }
    
    else {
      //header

      //header (the body data contain file type content)
      const headerConfig = {
        "Content-Type": "multipart/form-data",
      };

      //body data as formData : reason:-(the body data contain file type content)
      const data = new FormData();

      //append fname,lname,gender,status,email,location,mobile

      data.append("fname", fname);
      data.append("lname", lname);
      data.append("gender", gender);
      data.append("status", status);
      data.append("email", email);
      data.append("location", location);
      data.append("mobile", mobile);
      data.append("user_profile", image?image:inputs.profile);

      //api

      const result = await updateEmployee(id, data, headerConfig);
      // console.log(result);
      if (result.status >= 200 && result.status < 300) {

        setUpdateStatus(result.data)
        //redirect to list of employee page
        navigate("/employees-mng");
        // console.log(result);
      } else {
        setErrorMessage(result.response.data);
        console.log(errorMessage);

      }
    }
  };
  return (
    <div>
      <AdminHeader></AdminHeader>

      <Container className="my-5">
        <Col className="my-5 text-center">
          <img
            className="w-25"
            src={
              imagePreview
                ? imagePreview
                : `${BASE_URL}/uploads/${inputs.profile}`
            }
            alt="profile_picture"
          />
        </Col>

        <Row>
          <Col lg={6} md={6} sm={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={inputs.fname}
                  onChange={(e) => setData(e)}
                  name="fname"
                  required
                  type="text"
                  placeholder="First Name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              {!fnameValid && (
                <div>
                  <p className="text-danger">Includes letters only</p>
                </div>
              )}
            </Form>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={inputs.lname}
                  onChange={(e) => setData(e)}
                  name="lname"
                  required
                  type="text"
                  placeholder="Last Name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              {!lnameValid && (
                <div>
                  <p className="text-danger">Includes letters only</p>
                </div>
              )}
            </Form>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  value={inputs.email}
                  onChange={(e) => setData(e)}
                  name="email"
                  required
                  type="email"
                  placeholder="Email Addressord"
                />
              </Form.Group>
              {!emailValid && (
                <div>
                  <p className="text-danger">Invalid Email</p>
                </div>
              )}
            </Form>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mobile Numer</Form.Label>
                <Form.Control
                  value={inputs.mobile}
                  onChange={(e) => setData(e)}
                  name="mobile"
                  required
                  type="number"
                  placeholder="Mobile Number"
                />
              </Form.Group>
              {!mobileValid && (
                <div>
                  <p className="text-danger">
                    Includes numbers only, minimum 10 and maximum 13 numbers
                  </p>
                </div>
              )}
            </Form>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <Form>
              <Form.Group className="mb-3 radio" controlId="formBasicCheckbox">
                <p>Gender</p>
                <Form.Check
                  checked={inputs.gender == "male" ? true : false}
                  onChange={(e) => setData(e)}
                  type="radio"
                  label="Male"
                  name="gender"
                  value={"male"}
                />
                <Form.Check
                  checked={inputs.gender == "female" ? true : false}
                  onChange={(e) => setData(e)}
                  type="radio"
                  label="Female "
                  name="gender"
                  value={"female"}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="Select">Employees Status</Form.Label>
                <Form.Select
                  value={inputs.status}
                  onChange={(e) => setData(e)}
                  required
                  name="status"
                  id="Select"
                >
                  <option selected disabled>
                    Select
                  </option>
                  <option value="Active"> Active</option>
                  <option value="Inactive"> Inactive</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <Form>
              <Form.Group>
                <Form.Label>Choose Prifile Pic</Form.Label>
                <Form.Control onChange={(e) => imageChoose(e)} type="file" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Employee Location</Form.Label>
                <Form.Control
                  value={inputs.location}
                  onChange={(e) => setData(e)}
                  name="location"
                  required
                  type="text"
                  placeholder="Employee Location"
                />
                <Form.Text className="text-muted"> </Form.Text>
              </Form.Group>
              {!locationValid && (
                <div>
                  <p className="text-danger">
                    Includes letters and numbers only
                  </p>
                </div>
              )}
            </Form>
          </Col>
          <Col className=" text-center">
            <Button
              onClick={(e) => HandleEdit(e)}
              variant="primary"
              type="submit"
              className="w-25 mt-1"
            >
              Update
            </Button>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default Edit;
