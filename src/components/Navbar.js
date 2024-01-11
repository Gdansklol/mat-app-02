// basic function component

export default function Navbar() {
    return (
        <div className="navbar container">
          <a href="#!" className="logo">F<span>oo</span>dCrown</a>
          <div className="nav-links">
            <a href="#!">Home</a>
            <a href="#!">Menu</a>
            <a href="#!">Gallery</a>
          </div>
        </div>  
    )
}