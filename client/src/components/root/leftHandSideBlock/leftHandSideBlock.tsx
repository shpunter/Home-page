import { Link } from "@tanstack/react-router";
import Menu from "@UI/menu/menu.tsx";

const LeftHandSideBlock = () => {
  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/install">Installation</Link>
      <Link to="/add">Addition</Link>
      <Link to="/sub">Subtraction</Link>
      <Link to="/div">Division</Link>
      <Link to="/mul">Multiplication</Link>
    </Menu>
  );
};

export default LeftHandSideBlock;
