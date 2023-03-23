// import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';

const RegisterForm = (props) => {
  const initValues = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const doRegister = () => {
    console.log('doRegister', inputs);
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doRegister,
    initValues
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <input
          name="email"
          type="email"
          placeholder="MattiMeikalainen@mail.com"
          onChange={handleInputChange}
        />
        <input
          name="full_name"
          placeholder="Matti Meikalainen"
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

// RegisterForm.propTypes = {};

export default RegisterForm;
