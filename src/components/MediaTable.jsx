import MediaRow from './MediaRow';
import PropTypes from 'prop-types';

const MediaTable = ({mediaArray, dialog}) => {
  return (
    <table>
      <tbody>
        {mediaArray.map((item, i) => (
          <MediaRow key={i} item={item} dialog={dialog} />
        ))}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {
  mediaArray: PropTypes.array.isRequired,
  dialog: PropTypes.func.isRequired,
};

export default MediaTable;
