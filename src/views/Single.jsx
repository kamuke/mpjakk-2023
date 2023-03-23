import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';

const Single = () => {
  const {state} = useLocation();
  const {item} = state;

  return (
    <>
      <h1>{item.title}</h1>
      <img src={mediaUrl + item.filename} alt={item.title} />
    </>
  );
};

export default Single;
