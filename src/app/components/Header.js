import Nav from "react-bootstrap/Nav";
import Sortby from "./Sortby";
import SearchBy from "./SearchBy";
import styles from "./Header.css";
function Header() {
  return (
 
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <div className="container-item">
            <Nav.Item>
              <Sortby />
            </Nav.Item>
          </div>
          <div className="container-item">
            <Nav.Item>
              <SearchBy />
            </Nav.Item>
          </div>
        </Nav>
    
  );
}

export default Header;
