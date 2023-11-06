import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import HomeLayout from "./Layouts/HomeLayout";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StudentRegister from "./components/StudentRegister";
import TeacherRegister from "./components/TeacherRegister";
import RequireAuth from "./components/RequireAuth";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin";
import { AuthProvider } from "./context/AuthProvider";

const ROLES = {
  student: "s",
  teacher: "t",
  admin: "a",
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" exact element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* 
      <Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.student]} />}>
          <Route path="/student" element={<Student />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.teacher]} />}>
          <Route path="/teacher" element={<Teacher />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Layout />}>
            <Route index element={<Signup />} />
            <Route path="studentRegister" element={<StudentRegister />} />
            <Route path="teacherRegister" element={<TeacherRegister />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
