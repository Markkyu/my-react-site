import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import MainMenu from "./pages/MainMenu.jsx";
import TeacherList from "./pages/TeacherList.jsx";
import RoomList from "./pages/RoomList.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import CourseContainer from "./pages/CourseContainer.jsx";
import CourseList from "./pages/CourseList.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import CollegeList from "./pages/CollegeList.jsx";
import "./App.css";
import Scheduler from "./pages/Scheduler.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainMenu />} />
            <Route path="login" element={<Login />} />
            <Route path="teachers" element={<TeacherList />} />
            <Route path="rooms" element={<RoomList />} />
            <Route path="courses" element={<CourseContainer />} />
            <Route path="courses/:department" element={<CourseList />} />
            <Route path="about" element={<About />} />
            <Route path="master" element={<CollegeList />} /> 
            <Route path="scheduler" element={<Scheduler />} /> 
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
