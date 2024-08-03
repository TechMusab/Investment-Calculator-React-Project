import React, { useEffect } from "react";
import { useState } from "react";
export default function Inputgroup({ result }) {
  const [intialinvestment, setintialinvestment] = useState(0);
  const [annualinvestment, setannualinvestment] = useState(0);
  const [expectedreturn, setexpectedreturn] = useState(0);
  const [duration, setduration] = useState(0);
  useEffect(()=>{
    result(
        intialinvestment,
        annualinvestment,
        expectedreturn,
        duration
      );
  },[duration,intialinvestment,annualinvestment,expectedreturn])

  return (
    <>
      <div className="input-group">
        <div id="user-input">
          <label htmlFor="input-group">Intial investment</label>
          <input
            value={intialinvestment}
            onChange={(e) => {
              setintialinvestment(Number(e.target.value));
             
            }}
            type="number"
          />
        </div>
        <div id="user-input">
          <label htmlFor="input-group">Annual investment</label>
          <input
            value={annualinvestment}
            onChange={(e) => {
              setannualinvestment(Number(e.target.value));
            }}
            type="number"
          />
        </div>
        <div id="user-input">
          <label htmlFor="input-group">Expected Return</label>
          <input
            value={expectedreturn}
            type="number"
            onChange={(e) => {
              setexpectedreturn(Number(e.target.value));
            }}
          />
        </div>
        <div id="user-input">
          <label htmlFor="input-group">duration</label>
          <input
            value={duration}
            type="number"
            onChange={(e) => {
              setduration(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </>
  );
}
