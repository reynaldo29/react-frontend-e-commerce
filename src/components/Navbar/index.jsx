import { Badge } from "@mui/icons-material";
import { Search, ShoppingCartOutlined  } from "@mui/icons-material";
import logo from "../../assets/illustration.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="selection-logo">
            <img className="imgLogo" src={logo} />
            <h1 className="Titlelogo">DolceFlower</h1>
          </div>
        </div>
        <div className="center"></div>
        <div className="right">
          <div className="menuItem">PRINCIPAL</div>
          <div className="menuItem">NOSTROS</div>
          <div className="menuItem">TIENDA</div>
          <div className="menuItem">PAGINAS</div>
          <div className="menuItem">BLOGS</div>
          <div className="menuItem">DESTACADO</div>
          <div className="menuItem">CONTACTO</div>

          <div className="menuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>

          <div className="menuItem">
            <PersonOutlineOutlinedIcon />
          </div>

          <div className="menuItem">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
