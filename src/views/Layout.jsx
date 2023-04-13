import {
  AppBar,
  Container,
  createTheme,
  ThemeProvider,
  Toolbar,
  Box,
  Button,
  CssBaseline,
  Typography,
} from '@mui/material';
import {useContext, useEffect} from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {useUser} from '../hooks/ApiHooks';
import {themeOptions} from '../theme/themeOptions';

const Layout = () => {
  const {user, setUser} = useContext(MediaContext);
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const getUserInfo = async () => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      const userData = await getUserByToken(userToken);
      if (userData) {
        setUser(userData);
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

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/** CSS reset/normalize */}
      <AppBar as="nav" position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
            <Typography
              variant="h6"
              sx={{
                m: 2,
                letterSpacing: '.3rem',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{mr: 2}}>
              <Button sx={{color: 'white'}} component={Link} to="/home">
                Home
              </Button>
              {user ? (
                <>
                  <Button sx={{color: 'white'}} component={Link} to="/upload">
                    Upload
                  </Button>
                  <Button sx={{color: 'white'}} component={Link} to="/myfiles">
                    My files
                  </Button>
                  <Button sx={{color: 'white'}} component={Link} to="/profile">
                    Profile
                  </Button>
                  <Button sx={{color: 'white'}} component={Link} to="/logout">
                    Logout
                  </Button>
                </>
              ) : (
                <Button sx={{color: 'white'}} component={Link} to="/">
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Container maxWidth="xl" sx={{mt: 4}}>
          <Outlet />
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Layout;
