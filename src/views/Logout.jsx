// import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';
import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {useEffect} from 'react';

const Logout = (props) => {
  const {setUser} = useContext(MediaContext);

  useEffect(() => {
    setUser(null);
    localStorage.removeItem('userToken');
  }, []);

  return <Navigate to="/" />;
};

// Logout.propTypes = {};

export default Logout;
