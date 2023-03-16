import {useState} from 'react';
import MediaModal from './components/MediaModal';
import MediaTable from './components/MediaTable';

// Mockup data
const mediaArray = [
  {
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    thumbnails: {
      w160: 'https://placekitten.com/160/161',
    },
    filename: 'https://placekitten.com/2048/1920',
  },
  {
    title: 'Title 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    thumbnails: {
      w160: 'https://placekitten.com/160/162',
    },
    filename: 'https://placekitten.com/2041/1922',
  },
  {
    title: 'Title 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    thumbnails: {
      w160: 'https://placekitten.com/160/163',
    },
    filename: 'https://placekitten.com/2039/1920',
  },
];

const App = () => {
  const [dialog, setDialog] = useState(false);

  const resetDialog = () => {
    setDialog(false);
  };

  return (
    <div>
      <MediaTable mediaArray={mediaArray} dialog={setDialog} />
      {dialog && (
        <MediaModal
          img={dialog.img}
          alt={dialog.alt}
          resetDialog={resetDialog}
        />
      )}
    </div>
  );
};

export default App;
