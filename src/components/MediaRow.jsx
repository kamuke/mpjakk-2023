import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {Link} from 'react-router-dom';

const MediaRow = ({item}) => {
  return (
    <tr>
      <td>
        <img src={mediaUrl + item.thumbnails.w160} alt={item.title} />
      </td>
      <td>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </td>
      <td>
        <Link to="/single" state={{item: item}}>
          View
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MediaRow;
