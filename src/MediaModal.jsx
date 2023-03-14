export default function MediaModal(props) {
  return (
    <dialog open>
      <img src={props.img} alt={props.alt} />
      <form method="dialog">
        <button onClick={() => props.resetDialog()}>Close</button>
      </form>
    </dialog>
  );
}
