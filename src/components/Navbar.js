// basic function component

import {useState} from "react";
import Sidebar from "./Sidebar";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState();

    return (
      <>
       <div className="navbar container">
          <a href="#!" className="logo">F<span>oo</span>dCrown</a>
          <div className="nav-links">
            <a href="#!">Home</a>
            <a href="#!">Menu</a>
            <a href="#!">Gallery</a>
          </div>
          <div onClick={()=> setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
       </div>  

       <Sidebar />
       </>
    )
}