import React from "react";
import "./footer.css";
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Footer = () => {
    return (
        <div className="Container9 bg-[#F7F0EB]">
            <div className="Left2">
                <h1 className="Logo2"> Aaron</h1>
                <p className="Desc2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Similique, consequuntur facere quae inventore ut, neque hic
                    deserunt nam quis ratione quisquam. Ratione omnis recusandae
                    fuga expedita corrupti vero, libero doloribus.
                </p>

                <div className="SocialContainer">
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </div>
            </div>
            <div className="Center2">
                <h3 className="Title3">Useful Links</h3>
                <ul className="List3">
                    <li className="ListItem">Home</li>
                    <li className="ListItem">Cart</li>
                    <li className="ListItem">Man Fashion</li>
                    <li className="ListItem">Woman Fashion</li>
                    <li className="ListItem">Accesories</li>
                    <li className="ListItem">My Account</li>
                    <li className="ListItem">Order Tracking</li>
                    <li className="ListItem">Whislist</li>
                    <li className="ListItem">Whislist</li>
                    <li className="ListItem">Terms</li>
                </ul>
            </div>
            <div className="Right2">
                <h3 className="Title3">Contact</h3>
                <div className="ContactItem4">
                    <Room style={{ marginRight: "10px" }} />
                    622 Dixie Path , South Tobinchester 98336
                </div>
                <div className="ContactItem4">
                    <Phone style={{ marginRight: "10px" }} />
                    +1 234 56 78
                </div>
                <div className="ContactItem4">
                    <MailOutline style={{ marginRight: "10px" }} />
                    contact@lama.dev
                </div>
                <img
                    className="Payment"
                    src="https://i.ibb.co/Qfvn4z6/payment.png"
                />
            </div>
        </div>
    );
};

export default Footer;
