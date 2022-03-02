import React from "react";
import Footer from "../Footer";
import "./styles.scss";

function Main({ children }) {
    return (
        <div className="Main">
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Main;
