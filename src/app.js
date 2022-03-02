import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Browse from "./routes/Browse";
import Profile from "./routes/Profile";
import ReqForm from "./routes/ReqForm";
import { GlobalStyles } from "./styles/GlobalStyles";

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
		<BrowserRouter basename="/">
			<GlobalStyles />
			<Header />
			<Routes>
				<Route path="/" element={<Profile profileList={dummyList} />} />
				<Route path="/profile" element={<Profile profileList={dummyList} />} />
				<Route path="/reqform" element={<ReqForm />} />
				<Route path="/browse" element={<Browse />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
