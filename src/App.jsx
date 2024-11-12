import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import TransactionHistory from "./pages/TransactionHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />} />
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
