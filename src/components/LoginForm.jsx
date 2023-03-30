// import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useAuth} from '../hooks/ApiHooks';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {Form, Input, Button} from 'semantic-ui-react';

const LoginForm = (props) => {
  const {setUser} = useContext(MediaContext);
  const {postLogin} = useAuth();
  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      const loginResult = await postLogin(inputs);
      localStorage.setItem('userToken', loginResult.token);
      setUser(loginResult.user);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doLogin,
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
        <Button primary fluid type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

// LoginForm.propTypes = {};

export default LoginForm;
