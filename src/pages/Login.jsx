// import { useState } from "react";

// function Login({ onLogin }){
//     const[username, SetUsername] = useState("");
//     const[password, SetPassword] = useState("");
//     const[error, setError] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError("");

//         try {
//             const response = await fetch("http://127.0.0.1:8000/api/token/",{
//                 method: "POST",
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify({
//                     username:admin,
//                     password:superadmin123, }),
//             });
            
//             const data = await response.json();
//             if (data.access){
//                 localStorage.setItem("token", data.access);
//                 onLogin(); //notify app that login succeeded
//             } else{
//                 setError("Invalid Credentials");
//             }
//         }   catch(err) {
//             setError("Server error");
//         }
//     };

//     return (
//         <div className="login-page">
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//             <input 
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => SetUsername(e.target.value)}
//              />
//              <br />
//              <input 
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange = {(e)=> SetPassword(e.target.value)}
//              />
//              <br />
//              <button type="subit">Login</button>
//              </form>
//              {error && <p style={{color: "red"}}>{error}</p>}
//         </div>
//     );

// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log("Login clicked");

//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/token/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       });

//     const data = await response.json();
//     if (data.access) {
//       localStorage.setItem("token", data.access);
//       alert("Login successful");
//     } else {
//       alert("Login failed");
//     }
//   } catch (error) {
//     alert("Server error: " + error.message);
//   }
// };

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    console.log("Login clicked");

    const res = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log("Response:", data);

    // ✅ SAVE TOKEN
    localStorage.setItem("access", data.access);

    // ✅ redirect
    navigate("/dashboard");

    if (data.access) {
        console.log("Token received");

        localStorage.setItem("token", data.access);

        console.log("Redirecting...");

        window.location.href = "/dashboard";
        }
    else {
      alert("Login failed");
    }

  } catch (error) {
    console.error(error);
  }
};


  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
