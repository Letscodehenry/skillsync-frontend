// import { useState } from "react";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard"

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     !!localStorage.getItem("token")
//   );

//   const handleLogin = () => {
//     setIsLoggedIn(True);
//   };

//   return isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin}/>;

// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
