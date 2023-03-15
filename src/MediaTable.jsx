import MediaRow from './MediaRow';
import {useState, useEffect} from 'react';

export default function MediaTable(props) {
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
          <MediaRow key={i} item={item} dialog={props.dialog} />
        ))}
      </tbody>
    </table>
  );
}
