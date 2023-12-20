import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main/:id" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
