
import Project from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";




const App = () => {
  return(
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:  selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className = "absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radical-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0))]"></div>
      </div>
     
      
      <div className="container mx-auto px-8">
      <Navbar/>
      </div>
      <Hero/>
      <About/>
      <Technologies />  
      <Experience />
      <Project />
     <Contact />
      
    </div>
  
  );
};

export  default App;