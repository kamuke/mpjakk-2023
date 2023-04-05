// import {useState} from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {useUser} from '../hooks/ApiHooks';
import {useEffect, useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {Menu, Container, Button, Icon} from 'semantic-ui-react';
import {useWindowSize} from '../hooks/WindowHooks';

const Layout = () => {
  const {user, setUser} = useContext(MediaContext);
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const windowSize = useWindowSize();

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
    <>
      {windowSize.width > 767 ? (
        <Menu as="nav" style={{paddingLeft: 0}} fixed="top" inverted fluid>
          <Container>
            <Menu.Item as={Link} to="/home">
              <Icon name="home" />
              Home
            </Menu.Item>
            {user ? (
              <>
                <Menu.Item as={Link} to="/profile">
                  <Icon name="user" />
                  Profile
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as={Link} to="/logout" inverted>
                    Logout
                  </Button>
                </Menu.Item>
              </>
            ) : (
              <Menu.Item position="right">
                <Button as={Link} to="/" inverted>
                  Login
                </Button>
              </Menu.Item>
            )}
          </Container>
        </Menu>
      ) : (
        <Menu
          as="nav"
          icon="labeled"
          fixed="bottom"
          size="mini"
          inverted
          fluid
          widths={user ? 3 : 2}
        >
          <Menu.Item as={Link} to="/home">
            <Icon name="home" />
            Home
          </Menu.Item>
          {user ? (
            <>
              <Menu.Item as={Link} to="/profile">
                <Icon name="user" />
                Profile
              </Menu.Item>
              <Menu.Item as={Link} to="/logout">
                <Icon name="log out" />
                Logout
              </Menu.Item>
            </>
          ) : (
            <Menu.Item as={Link} to="/">
              <Icon name="sign in" />
              Login
            </Menu.Item>
          )}
        </Menu>
      )}
      <Container
        as="main"
        style={
          windowSize.width > 767
            ? {margin: '6rem 0'}
            : {margin: '1.5rem 0 5rem 0'}
        }
      >
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
