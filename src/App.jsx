import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StudentProtect from "./pages/StudentProtect";
import StudentLayout from "./components/StudentLayout";
import StudentDashboard from "./pages/StudentDashboard";
import Enroll from "./pages/enroll";
import PublicLayout from "./components/PublicLayout";
import EsewaPayment from "./pages/EsewaPayment";
import KhaltiPayment from "./pages/KhaltiPayment";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses-detail" element={<CourseDetail />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/contactUs" element={<Contact />} />
        </Route>
        <Route
          path="/student"
          element={
            <StudentProtect>
              <StudentLayout />
            </StudentProtect>
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/coursesDetail" element={<CourseDetail />} />
          <Route path="courses/coursesDetail/enroll" element={<Enroll />} />
          <Route path="courses/coursesDetail/enroll/esewa" element={<EsewaPayment />} />
          <Route path="courses/coursesDetail/enroll/khalti" element={<KhaltiPayment />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
