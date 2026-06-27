import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Contacts from "./pages/contacts";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
