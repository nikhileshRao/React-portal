import "./App.css";
import { useState } from "react";
import Modal from "./component/modal";

const App = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <h2>Click here to open modal</h2>
      <button onClick={() => setShow((show) => !show)}>Open Modal</button>
      <Modal show={show} closeModal={closeModal} />
    </div>
  );
};

export default App;
