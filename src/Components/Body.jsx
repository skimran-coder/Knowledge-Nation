import React from "react";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Courses from "./Sections/Courses";

const Body = () => {
  return (
    <main>
      <Hero />
      <Courses />
      <About />
      <Contact />
    </main>
  );
};

export default Body;
