import React, {useState} from 'react';
// import MediaModal from './MediaModal';

export default function MediaRow(props) {
  // const [clicked, setClicked] = useState(false);

  // const resetClicked = () => {
  //   setClicked(false);
  // };

  return (
    <tr>
      <td>
        <img src={props.item.thumbnails.w160} alt={props.item.title} />
      </td>
      <td>
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
      </td>
      <td>
        <button onClick={() => props.dialog({'img': props.item.filename, 'alt': props.item.title})}>View</button>
        {/* <a href={props.item.filename}>View</a> */}
      </td>
      {/* {clicked && (
        <MediaModal
          img={props.item.filename}
          altText={props.item.title}
          resetState={resetClicked}
        />
      )} */}
    </tr>
  );
}
