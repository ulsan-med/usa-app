import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MealPage from "./pages/MealPage";
import Schedule from "./pages/Schedule";
import Practice from "./pages/Practice";
import Professor from "./pages/Professor";
import Office from "./pages/Office";
import Notice from "./pages/Notice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/meal" element={<MealPage />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/professor" element={<Professor />} />
      <Route path="/office" element={<Office />} />
<Route path="/notice" element={<Notice />} />
    </Routes>
  );
}

export default App;
// deploy test