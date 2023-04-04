import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Add from "./components/AddContact/Add";
import Home from "./components/Home/Home";
import Edit from "./components/EditContact/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
