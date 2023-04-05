import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';
import {Header, Image} from 'semantic-ui-react';

const Single = () => {
  const {state} = useLocation();
  const {item} = state;

  return (
    <>
      <Image src={mediaUrl + item.filename} alt={item.title} />
      <Header as="h1">{item.title}</Header>
      <p>{item.description}</p>
    </>
  );
};

export default Single;
