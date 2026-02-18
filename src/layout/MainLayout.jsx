// import  {Link} from "react-router-dom"

// export default function MainLayout ({children}){
//     return (
//         <div className = "parent_con">

//             <div className="navbar_con">

//                 <h2>SkillSync</h2>

//                 <nav className="navbar_link">
//                     <Link to="/dashboard" style={{color:"white"}}>Dashboard</Link>
//                     <Link to="/projects" style={{color:"white"}}>Projects</Link>
//                     <Link to="/profile" style={{color:"white"}}>Profile</Link>
//                 </nav>
//             </div>

//             <div className="children_con">{children}</div>

//         </div>
//     )
// }

// import "../styles/MainLayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="app-container">

      <aside className="sidebar">
        <h2>SkillSync</h2>

        <nav className="nav-links">
          <a href="/dashboard">Dashboard</a>
          <a href="/projects">Projects</a>
          <a href="/profile">Profile</a>
        </nav>
      </aside>

      <div className="main-area">

        <header className="topbar">
          <h3>Welcome back 👋</h3>
        </header>

        <main className="content">
          {children}
        </main>

      </div>
    </div>
  );
}
