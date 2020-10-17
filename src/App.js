import React from "react";
import "./styles.css";
import Counter from './components/counterComponent';

export default function App() {
  return (
    <div className="App ui container">
      <h2 className="ui header block title ">Counter Example [ react+ redux]</h2>
      <br/>
      <div className="center">
        <Counter/>
      </div>
      

      
    </div>
  );
}
