export default function MediaRow(props) {
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
        <button
          onClick={() =>
            props.dialog({img: props.item.filename, alt: props.item.title})
          }
        >
          View
        </button>
      </td>
    </tr>
  );
}
