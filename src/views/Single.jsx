import {Card, CardMedia, CardContent, Typography} from '@mui/material';
import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';
import {useUser} from '../hooks/ApiHooks';
import {useEffect, useState} from 'react';

const Single = () => {
  const {state} = useLocation();
  const [owner, setOwner] = useState({username: ''});
  const {getUserById} = useUser();
  const file = state.file;
  let allData = {
    desc: file.description,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
    },
  };

  try {
    allData = JSON.parse(file.description);
  } catch (error) {
    console.log(error.message);
  }

  let mediaComponentType = 'img';
  switch (file.media_type) {
    case 'video':
      mediaComponentType = 'video';
      break;
    case 'audio':
      mediaComponentType = 'audio';
      break;
  }

  const fetchOwner = async () => {
    try {
      const userToken = localStorage.getItem('userToken');
      const ownerInfo = await getUserById(file.user_id, userToken);
      setOwner(ownerInfo);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchOwner();
  }, []);

  return (
    <>
      <Typography component="h1" variant="h3">
        {file.title}
      </Typography>
      <Card title={file.title}>
        <CardMedia
          controls={true}
          poster={mediaUrl + file.screenshot}
          component={mediaComponentType}
          src={mediaUrl + file.filename}
          title={file.title}
          style={{
            width: 600,
            height: 400,
            filter: `
            brightness(${allData.filters.brightness}%)
            contrast(${allData.filters.contrast}%)
            saturate(${allData.filters.saturation}%)
            `,
            backgroundImage:
              file.media_type === 'audio' &&
              `url(https://placekitten.com/640/640)`,
          }}
        />
        <CardContent>
          <Typography variant="body1">{allData.desc}</Typography>
          <Typography variant="body2">By: {owner.username}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

// TODO in the next task: add propType for location

export default Single;
