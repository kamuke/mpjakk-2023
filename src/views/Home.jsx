import {useState} from 'react';
import MediaTable from '../components/MediaTable';
import MediaModal from '../components/MediaModal';

const Home = () => {
  const [dialog, setDialog] = useState(false);

  const resetDialog = () => {
    setDialog(false);
  };

  return (
    <>
      <h1>Home</h1>
      <MediaTable dialog={setDialog} />
      {dialog && (
        <MediaModal
          img={dialog.img}
          alt={dialog.alt}
          resetDialog={resetDialog}
        />
      )}
    </>
  );
};

export default Home;
