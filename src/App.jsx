import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewMeetup from "./pages/New-meetup";
import Meetup from "./pages/Meetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-meetup" element={<NewMeetup />} />
            <Route path="/:id" element={<Meetup />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
