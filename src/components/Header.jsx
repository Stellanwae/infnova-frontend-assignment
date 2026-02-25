import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
            <img src={logo} alt="INFNOVA Academy Logo" />
        </div>

        <nav className="navigation">
          <a href="/courses">Courses</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="button-container">
            <button className="signin-btn">Sign In</button>
            <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>
    </header>
  );
}
