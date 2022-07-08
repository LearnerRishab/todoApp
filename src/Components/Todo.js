import React, { useState } from "react";
import todo from "../images/todo.png";
import "../App.css";

const Todo = () => {
  const [items, setItems] = useState();
  const [saveditems, setSavedItems] = useState([]);

  const addItem = () => {
    if (!items) {
      alert("Please fill the fields");
    } else {
      setSavedItems([...saveditems, items]);
      setItems("");
    }
  };

  const delfxn = (id) => {
    console.log("clicked");
    const xyz = saveditems.filter((e, ind) => {
      return ind !== id;
    });
    setSavedItems(xyz);
  };

  //remove all

  const removeAll=()=> {
   setSavedItems([])

  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="image" />
            <figcaption>Add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              name="text"
              placeholder="Add Item..."
              autoComplete="off"
              value={items}
              onChange={(e) => setItems(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>
          <div className="showItems">
            {saveditems.map((e, id) => {
              return (
                <div className="eachItem" key={id}>
                  <h3>{e}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => delfxn(id)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={(e)=>removeAll()}>
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
