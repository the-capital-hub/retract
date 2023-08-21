import { Contact, InformationKyc, Landing } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationKYI from "./pages/InformationKYI/InformationKYI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kyc" element={<InformationKyc />} />
        <Route path="/kyi" element={<InformationKYI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
