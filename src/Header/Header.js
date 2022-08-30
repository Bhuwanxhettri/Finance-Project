import { Link } from "react-router-dom";
import './Header.css'
function Header() {
  return (
    <>
      <nav className="navigation">
        <Link to="/">Expenditure</Link>
        <Link to="/saving">Saving</Link>
      </nav>
    </>
  );
}

export default Header;
