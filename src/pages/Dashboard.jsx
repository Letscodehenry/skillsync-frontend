// function Dashboard() {
//     const handleLogin = () => {
//         localStorage.removeItem("token");
//         window.location.reload();
//     };

//     return (
//         <div style={{padding:"40px"}}>
//             <h1> Welcome to SkillSync Dashboard</h1>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     );
// }

// export default Dashboard;

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>You are logged in 🎉</p>
    </div>
  );
}

export default Dashboard;
