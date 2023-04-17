import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  ButtonGroup,
  Button,
} from '@mui/material';
import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';
import {useFavourite, useUser} from '../hooks/ApiHooks';
import {useContext, useEffect, useState} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const Single = () => {
  const {user} = useContext(MediaContext);
  const {state} = useLocation();
  const [owner, setOwner] = useState({username: ''});
  const [likes, setLikes] = useState(0);
  const [userLike, setUserLike] = useState(false);
  const {getUserById} = useUser();
  const {getFavourites, postFavourite, deleteFavourite} = useFavourite();

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

  const fetchLikes = async () => {
    try {
      const likeInfo = await getFavourites(file.file_id);
      setLikes(likeInfo.length);
      likeInfo.forEach((like) => {
        like.user_id === user.user_id && setUserLike(true);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const doLike = async () => {
    try {
      const userToken = localStorage.getItem('userToken');
      const data = {file_id: file.file_id};
      const likeInfo = await postFavourite(data, userToken);
      console.log(likeInfo);
      setUserLike(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteLike = async () => {
    try {
      const userToken = localStorage.getItem('userToken');
      const likeInfo = await deleteFavourite(file.file_id, userToken);
      console.log(likeInfo);
      setUserLike(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchOwner();
  }, []);

  useEffect(() => {
    fetchLikes();
  }, [userLike]);

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
          <Typography variant="body2">Likes: {likes}</Typography>
          <ButtonGroup>
            <Button onClick={doLike} disabled={userLike}>
              Like
            </Button>
            <Button onClick={deleteLike} disabled={!userLike}>
              Dislike
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </>
  );
};

export default Single;
