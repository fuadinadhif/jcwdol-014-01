import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
