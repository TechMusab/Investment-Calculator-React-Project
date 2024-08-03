import { useState } from "react";
import Header from "./components/header";
import Inputgroup from "./components/inputgroup";
import Table from "./components/table";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [data, setdata] = useState([]);
const handleresult=(initialinvestment,annualInvestment,expectedReturn,duration)=>{
  const mydata=calculateInvestmentResults(initialinvestment,annualInvestment,expectedReturn,duration);
console.log(mydata);
  setdata(mydata);


}
  return (
    <>
      <Header></Header>
      <Inputgroup result={handleresult}></Inputgroup>
      <Table data={data}></Table>
    </>
  );
}

export default App;
