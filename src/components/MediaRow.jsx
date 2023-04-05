import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {Link} from 'react-router-dom';
import {Grid, Image} from 'semantic-ui-react';

const MediaRow = ({item}) => {
  return (
    <Grid.Column>
      <Image
        className="thumbnail"
        style={{height: '100%', padding: 0}}
        as={Link}
        to="/single"
        state={{item: item}}
        src={mediaUrl + item.thumbnails.w160}
        alt={item.title}
        fluid
      />
    </Grid.Column>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MediaRow;
