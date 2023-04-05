// import {useUser} from '../hooks/ApiHooks';
// import {useEffect} from 'react';
import {useContext, useEffect, useState} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {mediaUrl} from '../utils/variables';
import {useTag} from '../hooks/ApiHooks';
import {Image, Header, List} from 'semantic-ui-react';

const Profile = () => {
  const {user} = useContext(MediaContext);
  const [avatar, setAvatar] = useState({
    filename: 'https://placekitten.com/320',
  });
  const {getTag} = useTag();

  const fetchAvatar = async () => {
    try {
      if (user) {
        const avatars = await getTag('avatar_' + user.user_id);
        const ava = avatars.pop();
        ava.filename = mediaUrl + ava.filename;
        setAvatar(ava);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, [user]);

  console.log(avatar.filename);

  return (
    <>
      {user && (
        <>
          <Image src={avatar.filename} size="small" circular />
          <Header as="h1">
            {user.full_name}
            <Header.Subheader>@{user.username}</Header.Subheader>
          </Header>
          <List>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>{user.email}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="id badge outline" />
              <List.Content>{user.user_id}</List.Content>
            </List.Item>
          </List>
        </>
      )}
    </>
  );
};

export default Profile;
