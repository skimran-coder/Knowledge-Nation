import React from 'react';
import { useParams } from 'react-router-dom';
import About from './Sections/About'
import Contact from './Sections/Contact'
import ErrorPage from './ErrorPage'

function SectionPage() {
  const { sectionId } = useParams();

  const renderSection = () => {
    // switch (sectionId) {
    //   case 'hero':
    //     return <Hero />;
    //   case 'about':
    //     return <About />;
    //   case 'contact':
    //     return <Contact />;
    //   default:
    //     return <div>Section not found</div>;
    // }

    if (sectionId === "about") {
      return <About />;
    }
    else if (sectionId === "contact") {
      return <Contact />
    }
    else {
      return <ErrorPage/>
    }
  };

  return <div>{renderSection()}</div>;
}

export default SectionPage;
