// import {useUser} from '../hooks/ApiHooks';
// import {useEffect} from 'react';
import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(MediaContext);
  // const {getUserByToken} = useUser();

  // const getUserInfo = async () => {
  //   const token = localStorage.getItem('userToken');
  //   const user = await getUserByToken(token);
  //   setUser(user);
  // };

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  return (
    <>
      <h1>Profile</h1>
      <ul>
        <li>Username: {user && user.username}</li>
        <li>Full name: {user && user.full_name}</li>
        <li>Email: {user && user.email}</li>
      </ul>
    </>
  );
};

export default Profile;
