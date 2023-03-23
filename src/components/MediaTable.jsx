import MediaRow from './MediaRow';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {baseUrl} from '../utils/variables';

const MediaTable = ({dialog}) => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const response = await fetch(baseUrl + 'media');
        const files = await response.json();
        const filesWithThumbnails = await Promise.all(
          files.map(async (file) => {
            const response = await fetch(baseUrl + 'media/' + file.file_id);
            return await response.json();
          })
        );
        setMediaArray(filesWithThumbnails);
      } catch (e) {
        console.error('getMedia error: ', e);
      }
    };

    getMedia();
  }, []);

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
  dialog: PropTypes.func.isRequired,
};

export default MediaTable;
