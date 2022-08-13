import "./App.css";
import { useState } from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Divers from "./Pages/Divers/Divers";


function App() {

    return (
        
            

                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/divers" element={<Divers />} />
                    </Routes>
                </BrowserRouter>
            

    );
}

export default App;
