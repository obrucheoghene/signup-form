import { Button, Col, Row } from 'react-bootstrap';
import CustomInput from '../components/CustomInput';
import Logo from '../components/Logo';

const Signup = () => {
  return (
    <div className="signup-form">
      <Logo />
      <div className="form-title">
        <h1>Sign up Account</h1>
        <p>Discover your social & Try to sign up</p>
      </div>
      <Row className=" mb-3">
        <Col sm={6}>
          <CustomInput
            type="text"
            label="First Name"
            placeholder="Enter first name"
          />
        </Col>
        <Col sm={6}>
          <CustomInput
            type="text"
            label="Last Name"
            placeholder="Enter last name"
          />
        </Col>
      </Row>

      <Row className=" mb-3">
        <Col>
          <CustomInput type="email" label="Email" placeholder="Enter email" />
        </Col>
      </Row>

      <Row className=" mb-3">
        <Col>
          <CustomInput
            type="password"
            label="Password"
            placeholder="Enter password"
            isPassword
          />
        </Col>
      </Row>

      <Row className=" mb-3">
        <Col>
          <CustomInput
            type="password"
            label="Re-type Password"
            placeholder="Enter Password"
            isPassword
          />
        </Col>
      </Row>

      <button className="create-btn"> Create Account</button>
      <p className="mt-2">
        Already have an account? <a href="">Login</a>
      </p>
    </div>
  );
};

export default Signup;
