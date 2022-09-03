import "./exp.css";

function ExpItems(props) {
  const removeHandler = (e)=>{
    e.target.parentElement.remove()
  }
  return (
        <tr>
          <td>{props.title}</td>
          <td>{props.amount} EGP</td>
          <td>{props.date}</td>
          <button type="button" onClick={removeHandler}>Remove</button>
        </tr>
  );
}
export default ExpItems;
