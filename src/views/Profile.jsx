// import {useUser} from '../hooks/ApiHooks';
// import {useEffect} from 'react';
import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const Profile = () => {
  const {user} = useContext(MediaContext);

  return (
    <>
      <h1>Profile</h1>
      {user && (
        <ul>
          <li>Username: {user.username}</li>
          <li>Full name: {user.full_name}</li>
          <li>Email: {user.email}</li>
        </ul>
      )}
    </>
  );
};

export default Profile;
