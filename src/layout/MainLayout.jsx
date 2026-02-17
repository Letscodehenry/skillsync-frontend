import  {Link} from "react-router-dom"

export default function MainLayout ({children}){
    return (
        <div style ={{display:"flex", minHeight:"100vh"}}>

            <div style={{
                width: "220px",
                background: "#1f2937",
                color: "white",
                padding: "20px"
            }}>

                <h2>SkillSync</h2>

                <nav style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
                    <Link to="/dashboard" style={{color:"white"}}>Dashboard</Link>
                    <Link to="/projects" style={{color:"white"}}>Projects</Link>
                    <Link to="/profile" style={{color:"white"}}>Profile</Link>
                </nav>
            </div>

            <div style={{flex:1, padding:"20px"}}>{children}</div>

        </div>
    )
}