/* eslint-disable no-unused-vars */
import {Box, Button} from '@mui/material';
// import PropTypes from 'prop-types';
import useForm from './../hooks/FormHooks';

const Upload = (props) => {
  const initValues = {
    tilte: '',
    description: '',
    file: '',
  };

  const doUpload = () => {};

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doUpload,
    initValues
  );

  console.log('upload', inputs);

  return (
    <Box>
      <form>
        <input
          onChange={handleInputChange}
          type="text"
          name="title"
          placeholder="Title"
          value={inputs.title}
        ></input>
        <textarea
          onChange={handleInputChange}
          name="description"
          placeholder="Description"
          value={inputs.description}
        ></textarea>
        <input
          onChange={handleInputChange}
          type="file"
          name="file"
          accept="image/* video/* audio/*"
        ></input>
        <Button type="submit">Upload media</Button>
      </form>
    </Box>
  );
};

// Upload.propTypes = {};

export default Upload;
