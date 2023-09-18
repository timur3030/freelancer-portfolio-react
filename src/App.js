import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import "./styles/style.css";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="overlay"></div>
      <Home />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
