import MediaRow from './MediaRow';
import {useMedia} from '../hooks/ApiHooks';
import {Grid} from 'semantic-ui-react';
import {useWindowSize} from '../hooks/WindowHooks';

const MediaTable = () => {
  const {mediaArray} = useMedia();
  const windowSize = useWindowSize();

  return (
    <Grid
      columns={windowSize.width > 767 ? 4 : 3}
      className={windowSize.width > 767 ? 'container' : ''}
      style={{marginTop: '1rem'}}
    >
      {mediaArray.map((item, i) => (
        <MediaRow key={i} item={item} />
      ))}
    </Grid>
  );
};

export default MediaTable;
