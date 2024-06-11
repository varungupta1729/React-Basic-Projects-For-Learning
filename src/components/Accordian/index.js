import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [select, setSelected] = useState(null);
  const [multi, setMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getId) {
    if (multi) {
      setMultiple(multiple.add(getId));
    }

    if (select === getId) {
      setSelected(null);
    } else {
      setSelected(getId);
    }

    console.log(getId);
  }

  function handleMultiSelection(getId) {
    let cpyMultiple = [...multiple];
    const findIndex = cpyMultiple.indexOf(getId);

    if (findIndex === -1) cpyMultiple.push(getId);
    else cpyMultiple.splice(findIndex, 1);
    console.log(cpyMultiple);
    setMultiple(cpyMultiple);
  }

  function handleSelection() {
    setMulti(multi ? false : true);
  }
  return (
    <div className="wrapper">
      <button onClick={handleSelection}>
        {multi ? (
          <div>Enable Single Selection </div>
        ) : (
          <div>Enable Multi Selection</div>
        )}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                className="title"
                onClick={
                  multi
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              <div>
                {multi
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="contnet">{dataItem.answer}</div>
                    )
                  : select === dataItem.id && (
                      <div className="contnet">{dataItem.answer}</div>
                    )}
              </div>{" "}
            </div>
          ))
        ) : (
          <div> No Data Found </div>
        )}
      </div>
    </div>
  );
}
