import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusList from "./pages/BusList";
import SeatSelect from "./pages/SeatSelect";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./provider/Dashboard";
import AddBus from "./provider/AddBus";
import AddRoute from "./provider/AddRoute";
import AddSchedule from "./provider/AddSchedule";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buses" element={<BusList />} />
        <Route path="/seats/:id" element={<SeatSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/provider" element={<Dashboard />} />
        <Route path="/provider/add-bus" element={<AddBus />} />
        <Route path="/provider/add-route" element={<AddRoute />} />
        <Route path="/provider/add-schedule" element={<AddSchedule />} />      </Routes>
    </BrowserRouter>
  );
}

export default App;
