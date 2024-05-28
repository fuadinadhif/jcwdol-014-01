import Logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo image." />
      </div>
    </header>
  );
}

export default Header;
