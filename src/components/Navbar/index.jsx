import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span className="language">En</span>
          <div className="searchContainer">
            <input className="input" placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <h1 className="logo">AARON.</h1>
        </div>
        <div className="right">
          <div className="menuItem">REGISTER</div>
          <div className="menuItem">SIGN IN</div>
          <div className="menuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
