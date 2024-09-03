import React from "react";
import { useParams } from "react-router-dom";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import ErrorPage from "./ErrorPage";
import Courses from "./Sections/Courses";

function SectionPage() {
  const { sectionId } = useParams();

  const renderSection = () => {
    if (sectionId === "about") {
      return <About />;
    } else if (sectionId === "courses") {
      return <Courses />;
    } else if (sectionId === "contact") {
      return <Contact />;
    } else {
      return <ErrorPage />;
    }
  };

  return <div>{renderSection()}</div>;
}

export default SectionPage;
