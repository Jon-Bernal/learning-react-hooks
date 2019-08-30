import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import ObjectInUseState from "./components/ObjectInUseState.js";
import { useForm } from "./components/customHooks/useForm";

function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });

  useEffect(() => {
    console.log("render");
    return () => {
      // this will unmount the component
    };
  }, [values.password]); // will now only render when value passed to values.password

  return (
    <div className="App">
      <ObjectInUseState />
      <input
        name="email"
        type="text"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
