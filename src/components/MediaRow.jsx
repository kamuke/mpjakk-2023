import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';

const MediaRow = ({item, dialog}) => {
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
        <button onClick={() => dialog({img: item.filename, alt: item.title})}>
          View
        </button>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  dialog: PropTypes.func.isRequired,
};

export default MediaRow;
