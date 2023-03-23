import React from 'react';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';

const MediaModal = ({img, alt, resetDialog}) => {
  return (
    <dialog open>
      <img src={mediaUrl + img} alt={alt} />
      <form method="dialog">
        <button onClick={() => resetDialog()}>Close</button>
      </form>
    </dialog>
  );
};

MediaModal.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  resetDialog: PropTypes.func.isRequired,
};

export default MediaModal;
