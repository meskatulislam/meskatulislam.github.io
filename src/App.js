// import './App.css';

import { useEffect, useState } from "react";
import CareerBlog from "./components/CareerBlog";
import CareerGuideline from "./components/CareerGuideline";
import Community from "./components/Community";
import Company from "./components/Company";
import Courses from "./components/Courses";
import Experts from "./components/Experts";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import VideoResource from "./components/VideoResource";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  
  return (
    <div className="App">
      <Nav />
      <Slider />
      <CareerGuideline />
      <Courses windowWidth={windowWidth } />
      <VideoResource />
      <Community />
      <Experts />
      <Company />
      <CareerBlog windowWidth={windowWidth} />
      <Footer/>
    </div>
  );
}

export default App;
