import React, { Fragment } from "react";
import Login from "./pages/login";
import Home from "./pages/home";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
	return (
		<Fragment>
			<HashRouter>
			<Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
			</HashRouter>
		</Fragment>
	);
}

export default App;
