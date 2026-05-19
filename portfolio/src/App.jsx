import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ParticleCanvas from "./components/ui/ParticleCanvas";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import NotFoundPage from "./pages/NotFoundPage";

const MainLayout = () => (
  <>
    <ParticleCanvas />
    <Navbar />
    <main style={{ marginTop: "64px" }}>
      <HomePage />
    </main>
    <Footer />
  </>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
