/* eslint-disable no-unused-vars */
import {Box, Button, Slider, Stack} from '@mui/material';
// import PropTypes from 'prop-types';
import useForm from './../hooks/FormHooks';
import {useState} from 'react';
import {useMedia, useTag} from '../hooks/ApiHooks';
import {useNavigate} from 'react-router-dom';
import {appId} from '../utils/variables';

const Upload = (props) => {
  const [file, setFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(
    'https://placekitten.com/600/400'
  );
  // 'https://placehold.co/600x400?text=Choose-media'
  const {postMedia} = useMedia();
  const {postTag} = useTag();
  const navigate = useNavigate();

  const initValues = {
    tilte: '',
    description: '',
  };

  const filterInitValues = {
    brightness: 100,
    constrast: 100,
    saturation: 100,
  };

  const doUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('title', inputs.title);
      const allData = {
        desc: inputs.description,
        filters: filterInputs,
      };
      formData.append('description', JSON.stringify(allData));
      formData.append('file', file);
      const userToken = localStorage.getItem('userToken');
      // check if file
      const uploadResult = await postMedia(formData, userToken);
      const tagResult = await postTag(
        {
          file_id: uploadResult.file_id,
          tag: appId,
        },
        userToken
      );
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFileChange = (event) => {
    event.persist();
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setSelectedImage(reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doUpload,
    initValues
  );

  const {inputs: filterInputs, handleInputChange: handleFilterChange} = useForm(
    null,
    filterInitValues
  );

  return (
    <Box>
      <img
        src={selectedImage}
        alt="Preview of the media to be uploaded"
        style={{
          width: 600,
          height: 400,
          filter: `
          brightness(${filterInputs.brightness}%)
          contrast(${filterInputs.contrast}%)
          saturate(${filterInputs.saturation}%)
          `,
        }}
      />
      {/* <Stack></Stack> */}
      <Slider
        name="brightness"
        defaultValue={100}
        min={0}
        max={200}
        step={1}
        valueLabelDisplay="auto"
        onChange={handleFilterChange}
        value={filterInputs.brightness}
      />
      <Slider
        name="contrast"
        defaultValue={100}
        min={0}
        max={200}
        step={1}
        valueLabelDisplay="auto"
        onChange={handleFilterChange}
        value={filterInputs.contrast}
      />
      <Slider
        name="saturation"
        defaultValue={100}
        min={0}
        max={200}
        step={1}
        valueLabelDisplay="auto"
        onChange={handleFilterChange}
        value={filterInputs.saturation}
      />
      {/** TODO: Validation (no file) and styling */}
      <form onSubmit={handleSubmit}>
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
          onChange={handleFileChange}
          type="file"
          name="file"
          accept="image/*,video/*,audio/*"
        ></input>
        <Button type="submit">Upload media</Button>
      </form>
    </Box>
  );
};

// Upload.propTypes = {};

export default Upload;
