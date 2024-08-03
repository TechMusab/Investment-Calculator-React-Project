import React from "react";
import { formatter } from "../util/investment";
export default function Table({ data }) {
  
  if (data.length == 0) {
    return <div className="center">No Results Yet Please enter valid data</div>;
  }
  const intialinvestment=data[0].valueEndOfYear-data[0].interest-data[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          let totalinterest =
            item.valueEndOfYear - item.annualInvestment * item.year-intialinvestment;
          const totalamountinvested = item.valueEndOfYear - totalinterest;
          return (
            <tr key={index}>
              <td>{Math.floor(item.year)}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalinterest)}</td>
              <td>{formatter.format(totalamountinvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
