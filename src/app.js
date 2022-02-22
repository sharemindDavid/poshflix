import React from "react";
import Profile from "./routes/Profile";

function app() {
    const dummyList = [
        {
            id: 1,
            name: "김다윗",
            icon: "david",
        },
        {
            id: 2,
            name: "김다위",
            icon: "david",
        },
        {
            id: 3,
            name: "김대윗",
            icon: "david",
        },
        {
            id: 4,
            name: "김이윗",
            icon: "david",
        },
    ];

    return (
        <>
            <h1>hse</h1>
            <Profile profileList={dummyList} />
        </>
    );
}

export default app;
