// import PropTypes from 'prop-types';
import LoginForm from './../components/LoginForm';
import RegisterForm from './../components/RegisterForm';
import {useState} from 'react';

const Login = () => {
  const [formToggle, setFormToggle] = useState(true);

  const changeformToggle = () => {
    setFormToggle(!formToggle);
  };

  return (
    <>
      {formToggle ? <LoginForm /> : <RegisterForm />}
      <p>{formToggle ? 'First time here?' : 'Already have an account?'}</p>
      <button onClick={changeformToggle}>
        {formToggle ? 'Register' : 'Login'}
      </button>
    </>
  );
};

// Login.propTypes = {};

export default Login;
