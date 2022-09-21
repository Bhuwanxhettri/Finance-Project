import { Routes, Route} from "react-router-dom";
import Expenditure from "./ExpenseComponents/Expenditure";
import Header from "./Header/Header";
import Saving from "./SavingComponents/Saving";
function App() {
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Expenditure />} />
        <Route path="saving" element={<Saving />} />
      </Routes>
    </div>
  );
}

export default App;
