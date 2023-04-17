import {
  Button,
  ButtonGroup,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';
import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const MediaRow = ({file, deleteMedia}) => {
  const {user, update, setUpdate} = useContext(MediaContext);

  // TODO: move to mediatable
  const doDelete = async () => {
    try {
      const sure = confirm('Are you sure you want to delete this file?');
      if (sure) {
        const userToken = localStorage.getItem('userToken');
        const deleteResult = await deleteMedia(file.file_id, userToken);
        console.log(deleteResult);
        setUpdate(!update);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageListItem>
      <img
        src={
          file.media_type !== 'audio'
            ? mediaUrl + file.thumbnails?.w640
            : 'https://placekitten.com/640/640'
        }
        alt={file.title}
      />
      <ImageListItemBar
        title={file.title}
        subtitle={file.description}
        actionIcon={
          <ButtonGroup>
            <Button
              component={Link}
              variant="contained"
              to="/single"
              state={{file}}
            >
              View
            </Button>
            {user && file.user_id === user.user_id && (
              <>
                <Button
                  component={Link}
                  variant="contained"
                  to="/update"
                  state={{file}}
                >
                  Update
                </Button>
                <Button component={Link} variant="contained" onClick={doDelete}>
                  Delete
                </Button>
              </>
            )}
          </ButtonGroup>
        }
      />
    </ImageListItem>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object.isRequired,
  deleteMedia: PropTypes.func,
};

export default MediaRow;
