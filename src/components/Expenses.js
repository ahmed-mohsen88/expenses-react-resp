import "./exp.css";

function ExpItems(props) {
  return (
    <tr id ={props.id}>
      <td>{props.title}</td>
      <td>{props.amount}</td>
      <td>{props.date}</td>
        <button type="button" onClick={props.ondeletehandler} id = {props.id}>
          Remove
        </button>
    </tr>
  );
}
export default ExpItems;  
