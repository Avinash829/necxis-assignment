import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Image from "next/image";

export default function NavBar({ user, handleLogin, handleLogout, onNavClick }) {
  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
      
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onNavClick && onNavClick("home")}>
          <Image src="/logo.jpg" alt="Necxis Logo" width={40} height={40} />
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            Necxis
          </Typography>
        </Box>

       
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 3 }}>
          <Button color="inherit" onClick={() => onNavClick && onNavClick("home")}>
            Home
          </Button>
          
        </Box>

        
        <Box>
          {!user ? (
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "#1976d2",
                padding: "6px 12px",
                borderRadius: "8px",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
              onClick={handleLogin}
            >
              Sign Up with Google
            </Button>
          ) : (
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "#1976d2",
                padding: "6px 12px",
                borderRadius: "8px",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
              onClick={handleLogout}
            >
              Sign Out
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
