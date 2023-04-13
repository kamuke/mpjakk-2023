import React from 'react';
// import PropTypes from 'prop-types';
import {Typography} from '@mui/material';
import MediaTable from '../components/MediaTable';

const MyFiles = () => {
  return (
    <>
      <Typography component="h1" variant="h4">
        My files
      </Typography>
      <MediaTable myFilesOnly={true} />
    </>
  );
};

// MyFiles.propTypes = {};

export default MyFiles;
