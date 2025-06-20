import "./App.css";
import FooterContent from "./components/Footer/FooterContent";
import Goal from "./components/Goal/Goal";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/Services/Services";
import Tab from "./components/Tab/Tab";

function App() {
  return <div>
    <Header />
    <Hero />
    <Goal style={{margin: "40px 0"}}/>
    <Services />
    <Tab />
    <FooterContent />
  </div>;
}

export default App;
