import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExerciceDetail from "./pages/ExerciceDetail";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/exercice/:id" element={<ExerciceDetail />} />
      </Routes>
    </div>
  );
}

export default App;
