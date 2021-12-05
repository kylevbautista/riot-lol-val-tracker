import React from "react";
import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useHistory } from "react-router";
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userLActions from "../../redux/actions/userLActions";

function Header({ isLoggedIn, actions }) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  const handleLogin = () => {
    history.push("/login");
  };
  const handleLogout = () => {
    actions.logout();
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== "undefined" && token !== "null" && token !== null) {
      if (!isLoggedIn) {
        actions.login({ token: localStorage.getItem("token") });
      }
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#222222" }}>
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              aria-label="Nav-Bar homepage"
              color="inherit"
              onClick={handleClick}
              sx={{
                ":hover": {
                  bgcolor: "#404040",
                },
              }}
            >
              <Badge badgeContent={0} color="error">
                <HomeIcon />
              </Badge>
            </IconButton>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              Riot Games Stats Tracker
            </Typography>
            {!isLoggedIn && (
              <Button onClick={handleLogin} color="inherit">
                Login
              </Button>
            )}
            {isLoggedIn && (
              <>
                <Button color="inherit">Profile</Button>
                <Button onClick={handleLogout} color="inherit">
                  Logout
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logout: bindActionCreators(userLActions.logoutSucces, dispatch),
      login: bindActionCreators(userLActions.loginSuccess, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
