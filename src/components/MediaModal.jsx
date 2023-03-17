import React from 'react';
import PropTypes from 'prop-types';

const MediaModal = ({img, alt, resetDialog}) => {
  return (
    <dialog open>
      <img src={img} alt={alt} />
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
