import React, { useState } from "react";
import ExpItems from "./Expenses";

function Expform() {
  const [exp, setexp] = useState([]);
  const [etitle, settitle] = useState("");
  const [eamount, setamount] = useState("");
  const [edate, setdate] = useState("");

  const adding = (event) => {
    event.preventDefault();
    const nExp = {
      title: etitle,
      amount: eamount,
      date: new Date(edate),
      id: Math.floor(Math.random() * 1000),
    };
    if (!etitle || !eamount || !edate) {
      alert("please enter valid value");
      return false;
    } else {
      setexp([nExp, ...exp]);
      settitle("");
      setamount("");
      setdate("");
    }
  };

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
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Entry Date</th>
        </tr>
        {exp.map((expenses) => (
          <ExpItems
            title={expenses.title}
            amount={expenses.amount}
            id={expenses.id}
            date={expenses.date.toISOString()}
          />
        ))}
      </table>
    </>
  );
}

export default Expform;
