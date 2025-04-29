import { Route, Routes } from "react-router";

// Pages
import Home from "./pages/home.jsx";
import Register from "./pages/Register";
import Login from "./pages/Login.jsx";
import Verification from "./pages/VerificationPage.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

// Componets
import Nav from "./components/Nav.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";



const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/panel" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/verification/:email" element={<Verification />} />
      </Routes>
    </>
  )
}


export default App;