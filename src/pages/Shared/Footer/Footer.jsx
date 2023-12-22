import React from 'react';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <p style={{backgroundColor: "#F3F3F3", fontWeight: "500", height: "50px", alignItems: "center", justifyContent: "center", display: "flex"}}>All copyrights <FaRegCopyright style={{marginLeft: "2px", marginRight: "2px",}}></FaRegCopyright>by news dragon - 2023 </p>
        </div>
    );
};

export default Footer;