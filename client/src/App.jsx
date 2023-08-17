import { Contact, InformationKyc, Landing } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kyc" element={<InformationKyc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
