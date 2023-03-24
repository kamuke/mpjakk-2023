// import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {useEffect, useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const Logout = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(MediaContext);
  const navigate = useNavigate();

  const clearToken = () => {
    localStorage.removeItem('userToken');
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    clearToken();
  }, []);

  return <div>Logout</div>;
};

// Logout.propTypes = {};

export default Logout;
