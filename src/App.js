import Bai1ReactCanvas from "./bai_1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bai2ReactCanvas from "./bai_2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bai1ReactCanvas replace />} />
        <Route path="/bai-2" element={<Bai2ReactCanvas/>} />
      </Routes>
    </Router>
  );
}

export default App;
