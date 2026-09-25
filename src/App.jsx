import { Button } from "@/components/ui/button";
import HeroSection from "./components/Sections/HeroSection";
import About from "./components/Sections/About";
import Navbar from "./components/Sections/Navbar";
import Contact from "./components/Sections/ContactAndFooter"
function App() {
  return (
    
      <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Contact/>

      </>
   
  );
}

export default App;