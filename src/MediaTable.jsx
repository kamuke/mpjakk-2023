import MediaRow from './MediaRow';

export default function MediaTable(props) {
  return (
    <table>
      <tbody>
        {props.media.map((item, i) => (
          <MediaRow key={i} item={item} dialog={props.dialog}/>
        ))}
      </tbody>
    </table>
  );
}
