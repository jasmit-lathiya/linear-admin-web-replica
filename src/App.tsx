import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Contacts from './pages/contacts';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/contacts" />} />
      </Route>
    </Routes>
  );
}

export default App;
