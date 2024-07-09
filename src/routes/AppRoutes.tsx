import { Routes, Route } from 'react-router-dom';
import Location from '../pages/Location';
import Home from '../pages/Home';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location/:name/:latitude/:longitude" element={<Location />} />
    </Routes>
  );
};

export default AppRoutes;
