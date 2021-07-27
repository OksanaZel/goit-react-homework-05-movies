import React from "react";
import {Header} from "./AppBar.styled"
import Navigation from "../Navigation";

function AppBar() {
    return (
        <Header>
            <Navigation/>
        </Header>
    )
}

export default AppBar;
