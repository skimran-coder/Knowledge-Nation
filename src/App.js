import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SectionPage from './Components/SectionPage';
import ErrorPage from './Components/ErrorPage'
import WhatsAppButton from './Components/WhatsAppButton'
import Admin from './Components/Admin';
import CourseDetails from './Components/Sections/CourseDetails';
import CourseVideoPlayer from './Components/Sections/CourseVideoPlayer';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Body/>} />
          <Route path="/:sectionId" element={<SectionPage/>} />
          <Route path="/courses/:courseName" element={<CourseDetails/>} />
          <Route path="/courses/:courseName/:videoTitle" element={<CourseVideoPlayer/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer/>
      <WhatsAppButton/>
    </Router>
  );
}

export default App;
