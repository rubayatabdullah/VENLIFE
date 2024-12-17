import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Dashboard from "./components/Host/Dashboard";
import HostLayout from "./components/Host/HostLayout";
import HostVansDetail from "./components/Host/HostVanDetails";
import HostVanInfo from "./components/Host/HostVanInfo";
import HostVanPhotos from "./components/Host/HostVanPhotos";
import HostVans from "./components/Host/HostVans";
import HostVanPricing from "./components/Host/HostVansPricing";
import Income from "./components/Host/Income";
import Review from "./components/Host/Review";
import Layout from "./components/Layout";
import VanDetails from "./components/VanDetails";
import Vans from "./components/VansList";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="review" element={<Review />} />
            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="photos" element={<HostVanPhotos />} />
              <Route path="pricing" element={<HostVanPricing />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
