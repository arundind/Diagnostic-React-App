import React,{useState} from "react";
import { Link } from "react-router-dom";

function Navbar(){

const [menuOpen,setMenuOpen] = useState(false);

return(

<nav className="navbar">

<h2>My Website</h2>

<div className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>
☰
</div>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/services">Services</Link></li>
<li><Link to="/contact">Contact</Link></li>

</ul>

</nav>

)
}

export default Navbar;