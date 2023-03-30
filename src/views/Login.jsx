// import PropTypes from 'prop-types';
import LoginForm from './../components/LoginForm';
import RegisterForm from './../components/RegisterForm';
import {useState} from 'react';
import {Grid, Message, Segment, Button, Header} from 'semantic-ui-react';

const Login = () => {
  const [formToggle, setFormToggle] = useState(true);

  const changeformToggle = () => {
    setFormToggle(!formToggle);
  };

  return (
    <Grid style={{marginTop: '4rem'}}>
      <Grid.Column style={{maxWidth: 448, margin: 'auto'}}>
        <Header as="h2" textAlign="center" color="blue">
          {formToggle ? 'Login with your username' : 'Please create an account'}
        </Header>
        <Segment>{formToggle ? <LoginForm /> : <RegisterForm />}</Segment>
        <Message style={{textAlign: 'center'}}>
          <p>{formToggle ? 'First time here?' : 'Already have an account?'}</p>
          <Button
            basic
            color="blue"
            content={formToggle ? 'Register' : 'Login'}
            onClick={changeformToggle}
          />
        </Message>
      </Grid.Column>
    </Grid>
  );
};

// Login.propTypes = {};

export default Login;
