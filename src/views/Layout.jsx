// import {useState} from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {useUser} from '../hooks/ApiHooks';
import {useEffect, useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const Layout = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(MediaContext);
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const getUserInfo = async () => {
    const token = localStorage.getItem('userToken');
    if (token) {
      const user = await getUserByToken(token);

      if (user) {
        const target = location.pathname === '/' ? '/home' : location.pathname;
        navigate(target);
        return;
      }
    }

    navigate('/');
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <nav>
        {user && (
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Log out</Link>
            </li>
          </ul>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
