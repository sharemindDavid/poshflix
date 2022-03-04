import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Browse from "./routes/Browse";
import Profile from "./routes/Profile";
import ReqForm from "./routes/ReqForm";
import { GlobalStyles } from "./styles/GlobalStyles";
import * as ROUTES from "./constants/routes";

function App() {
    const dummyList = [
        {
            id: 1,
            name: "김다윗",
            icon: "netflix-face",
        },
        {
            id: 2,
            name: "김다위",
            icon: "netflix-face",
        },
        {
            id: 3,
            name: "김대윗",
            icon: "netflix-face",
        },
        {
            id: 4,
            name: "김이윗",
            icon: "netflix-face",
        },
        {
            id: 5,
            name: "김이윗",
            icon: "netflix-face",
        },
    ];

    return (
        <BrowserRouter basename={ROUTES.HOME}>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route
                    path={ROUTES.HOME}
                    element={<Profile profileList={dummyList} />}
                />
                <Route
                    path={ROUTES.PROFILE}
                    element={<Profile profileList={dummyList} />}
                />
                <Route path={ROUTES.FORM} element={<ReqForm />} />
                <Route path={ROUTES.BROWSE} element={<Browse />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
