import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import "./styles/App.scss"
import "./styles/header.scss"
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
