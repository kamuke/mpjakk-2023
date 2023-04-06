import {Card, CardMedia, CardContent, Typography} from '@mui/material';
import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';

const Single = () => {
  const {state} = useLocation();
  const file = state.file;
  let allData = {
    desc: file.description,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
    },
  };

  try {
    allData = JSON.parse(file.description);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <>
      <Typography component="h1" variant="h3">
        {file.title}
      </Typography>
      <Card title={file.title}>
        <CardMedia
          component={'img'}
          src={mediaUrl + file.filename}
          title={file.title}
          style={{
            width: 600,
            height: 400,
            filter: `
            brightness(${allData.filters.brightness}%)
            contrast(${allData.filters.contrast}%)
            saturate(${allData.filters.saturation}%)
            `,
          }}
        />
        <CardContent>
          <Typography variant="body1">{allData.desc}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

// TODO in the next task: add propType for location

export default Single;
