// import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useUser} from '../hooks/ApiHooks';
import {Form, Input, Button} from 'semantic-ui-react';

const RegisterForm = (props) => {
  const {postUser, getCheckUsername} = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const doRegister = async () => {
    try {
      const registerResult = await postUser(inputs);
      alert(registerResult.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUsername = async () => {
    try {
      const {available} = await getCheckUsername(inputs.username);
      // True or
      available || alert('Username already in use.');
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doRegister,
    initValues
  );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="username">Username</label>
          <Input
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
            onBlur={handleUsername}
            value={inputs.username}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={inputs.password}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            type="email"
            placeholder="MattiMeikalainen@mail.com"
            onChange={handleInputChange}
            value={inputs.email}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="full_name">Full name</label>
          <Input
            name="full_name"
            placeholder="Matti Meikalainen"
            onChange={handleInputChange}
            value={inputs.full_name}
          />
        </Form.Field>
        <Button primary fluid type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};

// RegisterForm.propTypes = {};

export default RegisterForm;
