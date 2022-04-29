import React, { useState } from "react";
import "./styles.css";
import Component1 from "./component/Component1";
import Component2 from "./component/Component2";
import Component3 from "./component/Component3";
import Component4 from "./component/Component4";

const App = () => {
  const [home, setHome] = useState(false);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);
  const [user, setUser] = useState(false);
  const getComponent1 = () => {
    setHome(true);
    setContact(false);
    setAbout(false);
    setUser(false);
  };
  const getContact = () => {
    setContact(true);
    setHome(false);
    setAbout(false);
    setUser(false);
  };
  const getAbout = () => {
    setAbout(true);
    setContact(false);
    setHome(false);
    setUser(false);
  };
  const getUser = () => {
    setUser(true);
    setAbout(false);
    setContact(false);
    setHome(false);
  };
  return (
    <div className="app">
      <div className="componentNav">
        <button onClick={getComponent1}>Home</button>
        <button onClick={getContact}>Contact details</button>
        <button onClick={getAbout}>About</button>
        <button onClick={getUser}>UserName</button>
      </div>
      <div className="renderComp">
        <h3>Navigated component will be render here</h3>
        <hr />
        {home ? <Component1 /> : ""}
        {contact ? <Component2 /> : ""}
        {about ? <Component3 /> : ""}
        {user ? <Component4 /> : ""}
      </div>
    </div>
  );
};
export default App;
