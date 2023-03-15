import {useState} from 'react';
import MediaModal from './MediaModal';
import MediaTable from './MediaTable';

function App() {
  const [dialog, setDialog] = useState(false);

  const resetDialog = () => {
    setDialog(false);
  };

  return (
    <div>
      <MediaTable dialog={setDialog} />
      {dialog && (
        <MediaModal
          img={dialog.img}
          alt={dialog.alt}
          resetDialog={resetDialog}
        />
      )}
    </div>
  );
}

export default App;
