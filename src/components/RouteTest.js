import React from "react";
import { Link } from "react-router-dom";

function RouteTest() {
    return (
        <>
            <Link to="/main">HOME</Link>
            <br />
            <Link to="/profile">profile</Link>
        </>
    );
}

export default RouteTest;
