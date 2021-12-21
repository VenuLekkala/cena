import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
//import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

const NavBar = () => {
return (
	<div>
	<AppBar position="static">
		<Toolbar>
		<IconButton
			edge="start"
			style={{
			marginRight:20,
			}}
			color="inherit"
			aria-label="menu"
		/>

		<Typography
			variant="h6"
			style={{
			flexGrow: 1,
			}}
		>
			CHUBB
		</Typography>
        Sunil
        <IconButton
			edge="start"
			style={{
			marginRight:10,
			}}
			color="inherit"
			aria-label="menu"
		/>
        Help
        <IconButton
			edge="start"
			style={{
            marginRight:10,
			}}
			color="inherit"
			aria-label="menu"
		/>
        <SettingsIcon/>
        <IconButton
			edge="start"
			style={{
			marginRight:10,
			}}
			color="inherit"
			aria-label="menu"
		/>
        <MenuIcon/>
		</Toolbar>
	</AppBar>
	</div>
);
};

export default NavBar;
