import PropTypes from 'prop-types';

const MediaRow = ({item, dialog}) => {
  return (
    <tr>
      <td>
        <img src={item.thumbnails.w160} alt={item.title} />
      </td>
      <td>
        <h2>{item.title}</h2>
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
