import MediaRow from './MediaRow';
import PropTypes from 'prop-types';
// import {useEffect, useState} from 'react';
import {useMedia} from '../hooks/apiHooks';
// import {baseUrl} from '../utils/variables';

const MediaTable = ({dialog}) => {
  const {mediaArray} = useMedia();

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
