import React, { useState } from "react";
import ExpItems from "./Expenses";

function Expform() {
  const [exp, setexp] = useState([]);
  const [etitle, settitle] = useState("");
  const [eamount, setamount] = useState("");
  const [edate, setdate] = useState("");
  const [totalAmount, setTotalAmount] = useState("");


  var nExp = {
    title: etitle,
    amount: eamount,
    date: new Date(edate).toLocaleDateString(),
    key: Math.floor(Math.random() * 1000),
    id :""
  };
  nExp.id = nExp.title

  const adding = (event) => {
    event.preventDefault();
    if (!etitle || !eamount || !edate) {
      alert("please enter valid value");
      return false;
    } else {
      setexp([...exp,nExp]);
      setamount((pre) => {
        return pre + eamount;
      });
      setTotalAmount(() => {
        return Number(eamount) + Number(totalAmount);
      });
      settitle("");
      setamount("");
      setdate("");
    }

  };
  const deletehandler = (event) => {
    exp.forEach((el , ind)=>{
      if (el.id == event.target.parentElement.id) {
        console.log(`id after add ${el.id}`);
        exp.splice( ind , 1);
        setTotalAmount(() => {
          return Number(totalAmount) - Number(el.amount);
        });
      }
      });
      settitle("");
      setdate("");
    }
  return (
    <>
      <form onSubmit={adding}>
        <label for="">
          <p>Expenses Form</p>
        </label>
        <input
          type="text"
          name="title"
          value={etitle}
          onChange={(e) => settitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="number"
          name="number"
          value={eamount}
          onChange={(e) => setamount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="date"
          name="date"
          value={edate}
          onChange={(e) => setdate(e.target.value)}
          placeholder="Date"
        />
        <input type="submit" name="submit" value="ADD EXPENSE" />
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Entry Date</th>
          </tr>
        </thead>
        <tbody>
          {exp.map((expenses, ind) => {
            return (
              <ExpItems
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
                ondeletehandler={deletehandler}
                id={expenses.title}
              />
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td>
              <strong onChange={(e)=>{setamount(e.target.value)}}>
          {totalAmount}
              </strong>
            </td>
            <td value = {totalAmount}></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
        }

export default Expform;
