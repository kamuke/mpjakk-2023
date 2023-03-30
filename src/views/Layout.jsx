// import {useState} from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {useUser} from '../hooks/ApiHooks';
import {useEffect, useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const Layout = () => {
  const {user, setUser} = useContext(MediaContext);
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const getUserInfo = async () => {
    const token = localStorage.getItem('userToken');
    if (token) {
      const user = await getUserByToken(token);

      if (user) {
        setUser(user);
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
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
