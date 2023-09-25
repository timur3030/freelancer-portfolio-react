import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

import ScrollToTop from "./utils/scrollToTop";
import "./styles/style.css";
import Project from "./components/project/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
