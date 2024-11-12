import './App.css';
import { BrowserRouter, Routes, Route } from "react";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import TransactionHistory from "./Pages/TransactionHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="report" element={<Report />} />
          <Route path="settings" element={<Settings/>} />
          <Route path="transactionhistory" element={<TransactionHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
