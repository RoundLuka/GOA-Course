import { Route, Routes } from "react-router";

// Components
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Nav from "./components/Nav.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./components/protectedRoute.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
