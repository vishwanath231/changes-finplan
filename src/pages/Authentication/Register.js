import React from 'react'
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback, Button } from "reactstrap";
import LOGO from '../../assets/img/logo.png';
import { Link } from "react-router-dom";
import ParticlesAuth from './ParticlesAuth';


const Register = () => {
  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <Link to='/' className='btn btn-dark'>Back</Link>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      <img src={LOGO} alt="" height="70" width='100%' />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">

                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Create New Account</h5>
                      {/* <p className="text-muted">Get your free velzon account now</p> */}
                    </div>
                    <div className="p-2 mt-4">
                      <Form
                        
                        className="needs-validation" action="#">

                       


                        <div className="mb-3">
                          <Label htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></Label>
                          <Input
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email address"
                            type="email"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="phone" className="form-label">Phone Number <span className="text-danger">*</span></Label>
                          <Input
                            name="phone"
                            type="text"
                            placeholder="Enter Phone Number"
                          />
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="userpassword" className="form-label">Password <span className="text-danger">*</span></Label>
                          <Input
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                          />
                        </div>

                        <div className="mb-2">
                          <Label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="text-danger">*</span></Label>
                          <Input
                            name="confirm_password"
                            type="password"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-4 text-center">
                  <p className="mb-0">Already have an account ? <Link to="/login" className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </ParticlesAuth>
    </React.Fragment>
  )
}

export default Register;