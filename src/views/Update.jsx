// import PropTypes from 'prop-types';
import {Box, Button, Slider} from '@mui/material';
import useForm from './../hooks/FormHooks';
import {useMedia} from '../hooks/ApiHooks';
import {useLocation, useNavigate} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';

const Update = (props) => {
  const {putMedia} = useMedia();
  const navigate = useNavigate();
  const {state} = useLocation();
  const file = state.file;
  console.log(file);
  let allData = {
    desc: file.description,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
    },
  };

  const selectedImage = mediaUrl + file.filename;

  try {
    allData = JSON.parse(file.description);
  } catch (error) {
    console.log(error.message);
  }

  console.log('alldata', allData);

  const initValues = {
    title: file.title,
    description: allData.desc,
  };

  const filterInitValues = allData.filters;

  const doUpdate = async () => {
    try {
      const allData = {
        desc: inputs.description,
        filters: filterInputs,
      };
      const data = {
        title: inputs.title,
        description: JSON.stringify(allData),
      };
      const userToken = localStorage.getItem('userToken');
      // check if file
      const updateResult = await putMedia(file.file_id, data, userToken);
      console.log(updateResult);
      navigate('/myfiles');
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doUpdate,
    initValues
  );

  console.log('inputs', inputs);

  const {inputs: filterInputs, handleInputChange: handleFilterChange} = useForm(
    null,
    filterInitValues
  );

  return (
    <Box>
      <img
        src={selectedImage}
        alt="Preview of the uploaded media"
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
        <Button type="submit">Update</Button>
      </form>
    </Box>
  );
};

// Upload.propTypes = {};

export default Update;
