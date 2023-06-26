import { Badge } from "@mui/icons-material";
import {
    Search,
    ShoppingCartOutlined,
    LoginOutlined,
} from "@mui/icons-material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import logo from "../../assets/illustration.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React from "react";

import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    /* return (
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
            <Badge badgecontent={4} color="primary">
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

    
  ); */
    return (
        <section className="flex h-[104px] w-full place-items-center bg-[#FCF9F7]">
            <div className="flex w-full flex-row place-content-around place-items-center">
                <ul className="relative flex h-[60px] w-[220px] place-items-center">
                    <img
                        src={logo}
                        alt="logo"
                        className="absolute left-0 top-0 h-[60px] w-[62px]"
                    />
                    <h1 className="left-0 ml-20 font-['Poppins',Helvetica] text-3xl font-bold text-[#394149]">
                        dolceflower
                    </h1>
                </ul>
                <ul className="flex flex-row gap-12">
                    <Link to={"/"}>
                        <li className="font-semibold text-[#C28566]">
                            Principal
                        </li>
                    </Link>
                    <li className="cursor-pointer">Nosotros</li>
                    <Link to={"/products"}>
                        <li className="cursor-pointer">Tienda</li>
                    </Link>
                    <li className="cursor-pointer">Páginas</li>
                    <li className="cursor-pointer">Blogs</li>
                    <li className="cursor-pointer">Destacado</li>
                    <li className="cursor-pointer">Contacto</li>
                    <li className="cursor-pointer">
                        <Search />
                    </li>
                    <li>
                        <ShoppingCartOutlined />
                    </li>
                    <Link to={"/login"}>
                        <li>
                            <LoginOutlined />
                        </li>
                    </Link>
                    <Link to={"/register"}>
                        <li>
                            <VpnKeyIcon />
                        </li>
                    </Link>
                </ul>
            </div>
        </section>
    );
};

export default Navbar;
