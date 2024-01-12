function Navbar() {
  return (
    <div className="nabarDiv">
      <img className="navbar_logo" src="W.png" alt="" />
      <div className="navbar_links">
        <a className="navbar_a" href="#">Home</a>
        <a className="navbar_a" href="#">New</a>
        <a className="navbar_a" href="#">Popular</a>
        <a className="navbar_a" href="#">Trending</a>
        <a className="navbar_a" href="#">Categories</a>
      </div>
    </div>
  );
}

export default Navbar;
