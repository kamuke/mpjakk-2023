import MediaRow from './MediaRow';
import {useMedia} from '../hooks/apiHooks';

const MediaTable = () => {
  const {mediaArray} = useMedia();

  return (
    <table>
      <tbody>
        {mediaArray.map((item, i) => (
          <MediaRow key={i} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default MediaTable;
