import React from "react";
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

function Header() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

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
            <Button disabled color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
