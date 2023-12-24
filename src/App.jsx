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
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Layout />}>
            <Route index element={<Signup />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/profile" element={<UserProfile />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
