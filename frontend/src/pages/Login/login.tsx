import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { login } from '../../store/Slices/authSlice';
import baimage from '../../assets/image.png';
import socialicon from '../../assets/social-icons.png';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validation, setValidation] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: '', password: '' };

    if (!validation.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!validation.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (!passwordRegex.test(validation.password)) {
      newErrors.password =
        'Password must be at least 8 characters long, contain at least 1 capital letter, 1 number, and 1 special character';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(login({
        username: validation.username,
        password: validation.password,
      }));
      navigate('/dashboard');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row w-100" style={{ maxWidth: '900px' }}>
        <div className="col-md-6 text-start" style={{ padding: '50px' }}>
          <h2>Sign In</h2>
          <p>
            New user? <a href="#create-account">Create an account</a>
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="Username or email"
                value={validation.username}
                onChange={(e) => setValidation({ ...validation, username: e.target.value })}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={validation.password}
                onChange={(e) => setValidation({ ...validation, password: e.target.value })}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Form.Check type="checkbox" label="Keep me signed in" className="mb-3" />
            <Button variant="dark" type="submit" className="w-100">
              Sign In
            </Button>
            <div className="d-flex align-items-center justify-content-center mb-3 mt-2">
              <hr className="flex-grow-1" />
              <span className="px-2">or Sign In with</span>
              <hr className="flex-grow-1" />
            </div>
            <div className="d-flex gap-2 justify-content-center">
              <img src={socialicon} style={{ width: '150px' }} alt="Social Icons" />
            </div>
          </Form>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={baimage} alt="Background" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Login;