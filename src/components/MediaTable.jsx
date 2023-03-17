import MediaRow from './MediaRow';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

const MediaTable = ({dialog}) => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const response = await fetch('test.json');
        const json = await response.json();
        setMediaArray(json);
      } catch (e) {
        console.error('getMedia error: ', e);
      }
    };

    getMedia();
  }, []);

  return (
    <table>
      <tbody>
        {mediaArray.map((item, i) => (
          <MediaRow key={i} item={item} dialog={dialog} />
        ))}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {
  dialog: PropTypes.func.isRequired,
};

export default MediaTable;

// import MediaRow from './MediaRow';
// import {useState, useEffect} from 'react';

// export default function MediaTable(props) {
//   const [mediaArray, setMediaArray] = useState([]);

//   useEffect(() => {
//     const getMedia = async () => {
//       try {
//         const response = await fetch('test.json');
//         const json = await response.json();
//         setMediaArray(json);
//       } catch (e) {
//         console.error('getMedia error: ', e);
//       }
//     };

//     getMedia();
//   }, []);

//   return (
//     <table>
//       <tbody>
//         {mediaArray.map((item, i) => (
//           <MediaRow key={i} item={item} dialog={props.dialog} />
//         ))}
//       </tbody>
//     </table>
//   );
// }
